'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export interface TocEntry {
  level: number
  text: string
  id: string
}

// Helper to generate a unique slug
const generateSlug = (text: string, usedIds: Set<string>): string => {
  const baseSlug = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

  let finalId = baseSlug
  let counter = 2
  while (usedIds.has(finalId)) {
    finalId = `${baseSlug}-${counter}`
    counter++
  }
  return finalId
}

export const useToc = (contentSelector: string, pathname: string) => {
  const [toc, setToc] = useState<TocEntry[]>([])
  const [activeId, setActiveId] = useState<string>('')

  const tocRef = useRef<TocEntry[]>([])
  const isClickScrollingRef = useRef<boolean>(false)
  const clickScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    tocRef.current = toc
  }, [toc])

  const handleTocClick = useCallback((id: string) => {
    isClickScrollingRef.current = true
    setActiveId(id)

    const element = document.getElementById(id)
    const header = document.querySelector('[data-sticky-header]')
    if (element) {
      const headerHeight = header?.clientHeight || 0
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16
      
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      window.history.pushState(null, '', `#${id}`)
    }

    if (clickScrollTimeoutRef.current) {
      clearTimeout(clickScrollTimeoutRef.current)
    }
    clickScrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false
    }, 1000)

  }, [])

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrollingRef.current) return

      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].target.id)
      } else {
        const currentToc = tocRef.current
        const lastEntry = currentToc[currentToc.length - 1]
        if (lastEntry && window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
          setActiveId(lastEntry.id)
        }
      }
    }

    observerRef.current = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1,
    })

    const mutationObserver = new MutationObserver(() => {
      observerRef.current?.disconnect()
      const contentElement = document.querySelector(contentSelector)
      if (!contentElement) return

      const headings = Array.from(contentElement.querySelectorAll('h2, h3')) as HTMLHeadingElement[]
      const usedIds = new Set<string>()
      const tocEntries: TocEntry[] = headings.map((h) => {
        const text = h.innerText || ''
        const level = parseInt(h.tagName.substring(1), 10)
        const id = generateSlug(text, usedIds)
        usedIds.add(id)
        h.id = id // Forcefully apply the unique ID to the DOM element
        return { level, text, id }
      })
      
      setToc(tocEntries)
      headings.forEach((h) => observerRef.current?.observe(h))

      if (!isClickScrollingRef.current) {
        const hash = window.location.hash.substring(1)
        setActiveId(hash || tocEntries[0]?.id || '')
      }
    })

    const contentElement = document.querySelector(contentSelector)
    if (contentElement) {
      mutationObserver.observe(contentElement, { childList: true, subtree: true })
    }

    // Initial run on mount
    mutationObserver.takeRecords();
    mutationObserver.disconnect(); // Disconnect to manually trigger for the first time
    const initialRun = () => {
        const contentElement = document.querySelector(contentSelector);
        if (contentElement) {
            const headings = Array.from(contentElement.querySelectorAll('h2, h3')) as HTMLHeadingElement[];
            const usedIds = new Set<string>();
            const tocEntries: TocEntry[] = headings.map((h) => {
                const text = h.innerText || '';
                const level = parseInt(h.tagName.substring(1), 10);
                const id = generateSlug(text, usedIds);
                usedIds.add(id);
                h.id = id;
                return { level, text, id };
            });
            setToc(tocEntries);
            headings.forEach(h => observerRef.current?.observe(h));
            if (!isClickScrollingRef.current) {
                const hash = window.location.hash.substring(1);
                setActiveId(hash || tocEntries[0]?.id || '');
            }
            mutationObserver.observe(contentElement, { childList: true, subtree: true });
        }
    };
    const frameId = requestAnimationFrame(initialRun);

    return () => {
      cancelAnimationFrame(frameId);
      observerRef.current?.disconnect()
      mutationObserver.disconnect()
      if (clickScrollTimeoutRef.current) {
        clearTimeout(clickScrollTimeoutRef.current)
      }
    }
  }, [pathname, contentSelector])

  return { toc, activeId, handleTocClick }
}