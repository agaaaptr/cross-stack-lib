'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface ThemeToggleProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      className={cn("h-9 w-9 rounded-[0.5rem] p-0", className)}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...props}
    >
      <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
