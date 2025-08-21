'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Component1Icon, FileTextIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "Getting Started",
    href: "/getting-started",
    icon: FileTextIcon,
    children: [
      { title: "Installation", href: "/getting-started/installation" },
      { title: "Usage", href: "/getting-started/usage" },
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

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const activeAccordionItem = navItems.find(item => pathname.startsWith(item.href))?.href

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <span className="font-bold">XStack Lib</span>
        </Link>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <Accordion type="single" collapsible defaultValue={activeAccordionItem}>
            {navItems.map((item) => (
              <AccordionItem value={item.href} key={item.href}>
                <AccordionTrigger className="hover:no-underline">
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
                        onClick={() => setOpen(false)}
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
      </SheetContent>
    </Sheet>
  )
}