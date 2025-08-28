import { SidebarNav } from "@/components/sidebar-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableOfContents } from "@/components/table-of-contents";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid flex-1 gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_200px]">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 lg:py-10 pr-6 border-r border-border/40">
            <SidebarNav />
          </ScrollArea>
        </aside>
        <main id="main-content" className="relative py-6 lg:py-10 min-w-0">
          {children}
        </main>
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
          <ScrollArea className="h-full py-6 lg:py-10 pl-6">
            <TableOfContents contentSelector="#main-content" />
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
}
