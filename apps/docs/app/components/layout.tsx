import Link from 'next/link';

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', padding: '20px', borderRight: '1px solid #eee' }}>
        <h3>Components</h3>
        <ul>
          <li>
            <Link href="/components/table">Table</Link>
          </li>
          <li>
            <Link href="/components/modal">Modal</Link>
          </li>
        </ul>
      </nav>
      <main style={{ flexGrow: 1, padding: '20px' }}>{children}</main>
    </div>
  );
}