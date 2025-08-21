'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CodeBlockWrapper({ children, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  const onCopy = () => {
    if (typeof window === 'undefined' || !children) return
    // Find the actual code text within the pre element, ignoring line numbers or other elements added by rehype-pretty-code
    const codeElement = document.createElement('div');
    codeElement.innerHTML = React.Children.toArray(children).join('');
    const codeString = codeElement.querySelector('code')?.textContent || '';

    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div className="relative" {...props}>
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
      {children}
    </div>
  )
}
