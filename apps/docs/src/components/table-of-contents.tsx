'use client'

import { useToc } from '@/lib/use-toc'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import * as React from 'react'

export function TableOfContents({ contentSelector }: { contentSelector: string }) {
  const pathname = usePathname()
  const { toc, activeId, handleTocClick } = useToc(contentSelector, pathname)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    handleTocClick(id)
  }

  if (toc.length === 0) {
    return (
      <div className="space-y-2">
        <p className="font-medium">On This Page</p>
        <div className="relative space-y-2 pl-4 text-sm text-muted-foreground">
          No headings found.
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <ul className="relative space-y-2">
        {toc.map((entry) => (
          <li key={entry.id} className="relative py-1">
            <a
              href={`#${entry.id}`}
              onClick={(e) => handleClick(e, entry.id)}
              className={cn(
                'block text-sm text-muted-foreground transition-colors hover:text-foreground',
                { 'text-primary font-medium': activeId === entry.id },
                entry.level === 3 ? 'pl-7' : 'pl-4'
              )}
            >
              {entry.text}
            </a>
            {activeId === entry.id && (
              <motion.div
                layoutId="toc-slider"
                className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}