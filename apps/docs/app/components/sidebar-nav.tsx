'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SidebarNav() {
  const pathname = usePathname()

  const components = [
    { href: "/components/table", label: "Table" },
    { href: "/components/modal", label: "Modal" },
  ]

  return (
    <div className="w-full">
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {components.map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:underline",
                pathname === component.href
                  ? "font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {component.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
