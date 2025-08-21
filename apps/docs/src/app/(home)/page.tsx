import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, InfoCircledIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Build modern UI, faster than ever.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            XStack Library is a modern, open-source Web Component library designed for seamless integration into any framework.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="/getting-started/installation">
                Get Started <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <a href="mailto:suggestion@example.com">
                <InfoCircledIcon className="mr-2 h-5 w-5" />
                Suggest a Feature
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}