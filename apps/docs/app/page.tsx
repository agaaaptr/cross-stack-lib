import Link from "next/link";
import { PageTransition } from "@/app/components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Build modern UI, faster than ever.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            cross-stack-lib is a modern, open-source Web Component library designed for seamless integration into any framework.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/getting-started" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Get Started
            </Link>
            <Link href="/components/table" className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Components
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}