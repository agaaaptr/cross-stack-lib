'use client'

import { useEffect, useState, useRef } from 'react'

export interface TocEntry {
  level: number
  text: string
  id: string
}

export interface HeadingRect extends TocEntry {
  top: number;
  height: number;
}

export const useToc = (contentSelector: string, pathname: string) => {
  const [toc, setToc] = useState<TocEntry[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [headingRects, setHeadingRects] = useState<HeadingRect[]>([])
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const contentElement = document.querySelector(contentSelector)
    if (!contentElement) return

    scrollRef.current = contentElement as HTMLElement; // Type assertion

    const headings = Array.from(
      contentElement.querySelectorAll('h2, h3') // Include h3 again
    ) as HTMLHeadingElement[]

    const tocEntries: TocEntry[] = []
    const rects: HeadingRect[] = []

    headings.forEach((heading) => {
      let id = heading.id;
      const text = heading.innerText;
      const level = parseInt(heading.tagName.substring(1), 10);
      const rect = heading.getBoundingClientRect();

      // Ensure ID uniqueness
      let counter = 1;
      const originalId = id; // Store original ID to append counter
      while (tocEntries.some(entry => entry.id === id)) {
        id = `${originalId}-${counter}`;
        counter++;
      }

      tocEntries.push({ id, text, level });
      rects.push({ id, text, level, top: rect.top + window.scrollY, height: rect.height });
    });

    setToc(tocEntries);
    setHeadingRects(rects);

    const observer = new IntersectionObserver(
      (entries) => {
        let currentActiveId = '';
        // Find the first heading that is intersecting and its top is near the viewport top
        const visibleHeadings = entries.filter(entry => entry.isIntersecting && entry.boundingClientRect.top <= window.innerHeight * 0.2);

        if (visibleHeadings.length > 0) {
          // Sort by how close they are to the top of the viewport
          visibleHeadings.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          currentActiveId = visibleHeadings[0].target.id;
        } else {
          // If no heading is near the top, find the first one intersecting from the top
          const firstIntersecting = entries.find(entry => entry.isIntersecting);
          if (firstIntersecting) {
            currentActiveId = firstIntersecting.target.id;
          }
        }

        if (currentActiveId) {
          setActiveId(currentActiveId);
        }
      },
      { rootMargin: '0px 0px -50% 0px' } // Adjust rootMargin for better active state detection
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
    }
  }, [contentSelector, pathname])

  return { toc, activeId, headingRects, scrollRef }
}
