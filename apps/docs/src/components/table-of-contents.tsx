'use client'

import { useToc } from '@/lib/use-toc'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import * as React from 'react'

export function TableOfContents({ contentSelector }: { contentSelector: string }) {
  const pathname = usePathname()
  const { toc, activeId } = useToc(contentSelector, pathname)
  const tocRef = React.useRef<HTMLUListElement>(null)
  const [sliderStyle, setSliderStyle] = React.useState({ top: 0, height: 0 })

  React.useEffect(() => {
    if (tocRef.current && activeId) {
      const activeElement = tocRef.current.querySelector(`a[href="#${activeId}"]`)
      if (activeElement instanceof HTMLElement) { // Ensure it's an HTMLElement
        setSliderStyle({
          top: activeElement.offsetTop,
          height: activeElement.clientHeight,
        })
      }
    }
  }, [activeId, toc])

  if (toc.length === 0) {
    return null
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <div className="relative">
        {/* Vertical Track */}
        <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-muted" />
        {/* Slider */}
        <motion.div
          className="absolute left-0 w-[3px] rounded-full bg-primary"
          initial={false}
          animate={sliderStyle}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        />
        <ul ref={tocRef} className="relative space-y-2 pl-4">
          {toc.map((entry) => (
            <li key={entry.id}>
              <a
                href={`#${entry.id}`}
                onClick={(e) => handleClick(e, entry.id)}
                className={cn(
                  'block text-sm text-muted-foreground transition-colors hover:text-foreground py-1',
                  { 'text-primary': activeId === entry.id }, // Re-add text-primary for active item
                  entry.level === 3 && 'pl-4'
                )}
              >
                {entry.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
