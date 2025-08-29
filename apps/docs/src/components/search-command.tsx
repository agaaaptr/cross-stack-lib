'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { MagnifyingGlassIcon, Component1Icon, FileTextIcon } from '@radix-ui/react-icons'

const commandItems = [
  { title: 'Getting Started', href: '/getting-started', category: 'Navigation', icon: FileTextIcon },
  { title: 'Installation', href: '/getting-started/installation', category: 'Getting Started', icon: FileTextIcon },
  { title: 'Usage', href: '/getting-started/usage', category: 'Getting Started', icon: FileTextIcon },
  { title: 'Suggest a Feature', href: '/getting-started/suggest-feature', category: 'Getting Started', icon: FileTextIcon },
  { title: 'Components', href: '/components', category: 'Navigation', icon: Component1Icon },
  { title: 'Table', href: '/components/table', category: 'Components', icon: Component1Icon },
  { title: 'Modal', href: '/components/modal', category: 'Components', icon: Component1Icon },
]

export function SearchCommand() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const filteredItems = query
    ? commandItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : commandItems

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64'
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex text-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0" open={open}>
          <DialogTitle className="sr-only">Search Documentation</DialogTitle>
          <DialogDescription className="sr-only">
            Search for documentation, components, and examples.
          </DialogDescription>
          <div className="flex items-center border-b px-5">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              type="text"
              placeholder="Type a command or search..."
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm border-0 px-2 my-2" // Removed conflicting focus styles
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="p-2">
            <p className="text-xs text-muted-foreground p-2">Suggestions</p>
            <div className="flex flex-col space-y-1">
              {filteredItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="justify-start w-full px-2" // Added px-2
                  onClick={() => runCommand(() => router.push(item.href))}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}