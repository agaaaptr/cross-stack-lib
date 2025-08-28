'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Component1Icon, FileTextIcon } from "@radix-ui/react-icons"

const navItems = [
  {
    title: "Getting Started",
    href: "/getting-started",
    icon: FileTextIcon,
    children: [
      { title: "Installation", href: "/getting-started/installation" },
      { title: "Usage", href: "/getting-started/usage" },
      { title: "Suggest a Feature", href: "/getting-started/suggest-feature" },
    ],
  },
  {
    title: "Components",
    href: "/components",
    icon: Component1Icon,
    children: [
      { title: "Table", href: "/components/table" },
      { title: "Modal", href: "/components/modal" },
    ],
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  const activeAccordionItem = navItems.find(item => pathname.startsWith(item.href))?.href

  return (
    <div className="w-full">
      <Accordion type="single" collapsible defaultValue={activeAccordionItem}>
        {navItems.map((item) => (
          <AccordionItem value={item.href} key={item.href}>
            <AccordionTrigger className={cn("hover:no-underline", pathname.startsWith(item.href) && "text-primary hover:text-primary")}>
              <div className="flex items-center">
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-4">
              <div className="flex flex-col space-y-2">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "text-muted-foreground hover:text-foreground transition-colors",
                      pathname === child.href && "text-primary"
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
