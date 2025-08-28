'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CodeBlockWrapper({ children, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const codeRef = React.useRef<HTMLDivElement>(null); // Added ref

  const onCopy = () => {
    if (typeof window === 'undefined' || !codeRef.current) return // Check codeRef.current

    const codeString = codeRef.current.textContent || ''; // Get textContent from ref

    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="relative rounded-lg border bg-card dark:bg-card" {...props}> {/* Background/border here */} 
      <div className="absolute top-2 right-2 z-10">
        <Button variant="ghost" size="icon" onClick={onCopy} className="hover:text-foreground">
          {isCopied ? (
            <CheckIcon className="h-4 w-4 text-white" />
          ) : (
            <ClipboardIcon className="h-4 w-4 text-white" />
          )}
          <span className="sr-only">Copy to clipboard</span>
        </Button>
      </div>
      <div ref={codeRef} className="overflow-x-auto bg-[hsl(var(--code-block-background))] p-4 rounded-lg" style={{ whiteSpace: 'pre', height: 'auto' }}> {/* Added ref */} 
        {children} {/* This children is the raw code content */} 
      </div>
    </div>
  )
}