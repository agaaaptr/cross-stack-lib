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
    <html lang="en" className="dark">
      <body className="bg-dark-DEFAULT text-light-DEFAULT min-h-screen flex flex-col">
        <header className="bg-dark-light p-4 border-b border-dark-lighter flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-light-DEFAULT hover:text-accent transition-colors duration-300">Home</Link></li>
              <li><Link href="/getting-started" className="text-light-DEFAULT hover:text-accent transition-colors duration-300">Getting Started</Link></li>
              <li><Link href="/components/table" className="text-light-DEFAULT hover:text-accent transition-colors duration-300">Components</Link></li>
            </ul>
          </nav>
          {/* Basic Theme Toggle - will be enhanced later */}
          <button className="bg-primary text-white px-3 py-1 rounded hover:bg-accent transition-colors duration-300">
            Toggle Theme
          </button>
        </header>
        <main className="flex-grow p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
