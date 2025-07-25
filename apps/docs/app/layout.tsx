import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "cross-stack-lib Documentation",
  description: "Documentation for cross-stack-lib UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginRight: '20px' }}><Link href="/">Home</Link></li>
              <li style={{ marginRight: '20px' }}><Link href="/getting-started">Getting Started</Link></li>
              <li><Link href="/components/table">Components</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
