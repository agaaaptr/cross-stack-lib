import Link from 'next/link';

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-grow">
      <nav className="w-64 p-6 bg-background-light border-r border-background-lighter text-text-DEFAULT">
        <h3 className="text-xl font-semibold mb-4 text-primary">Components</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/components/table" className="block text-text-DEFAULT hover:text-accent transition-colors duration-300">
              Table
            </Link>
          </li>
          <li>
            <Link href="/components/modal" className="block text-text-DEFAULT hover:text-accent transition-colors duration-300">
              Modal
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-8 bg-background-DEFAULT">
        {children}
      </main>
    </div>
  );
}