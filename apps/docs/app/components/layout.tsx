import { SidebarNav } from "./sidebar-nav";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-8">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 lg:py-10 border-r border-border/40">
            <SidebarNav />
          </div>
        </aside>
        <main className="relative py-6 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
