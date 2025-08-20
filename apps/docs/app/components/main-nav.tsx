'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link
        href="/getting-started"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/getting-started" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Getting Started
      </Link>
      <Link
        href="/components/table"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/components")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Components
      </Link>
    </nav>
  )
}
