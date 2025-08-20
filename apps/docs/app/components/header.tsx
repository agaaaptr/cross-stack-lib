'use client'

import * as React from "react"
import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"
import { MobileNav } from "@/app/components/mobile-nav"
import { ThemeToggle } from "@/app/components/theme-toggle"

export function Header() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center px-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
