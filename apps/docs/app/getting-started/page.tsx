import Installation from './installation.mdx';
import Usage from './usage.mdx';
import { PageTransition } from "@/app/components/page-transition";

export default function GettingStartedPage() {
  return (
    <PageTransition>
      <div className="container max-w-4xl py-10 px-4">
        <div className="prose dark:prose-invert">
          <Installation />
          <Usage />
        </div>
      </div>
    </PageTransition>
  );
}
