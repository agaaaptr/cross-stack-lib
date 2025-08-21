import Examples from './examples.mdx';
import API from './api.mdx';
import { PageTransition } from "@/components/page-transition";

export default function TablePage() {
  return (
    <PageTransition>
      <div className="prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6 text-primary">XStack Table Component</h1>
        <Examples />
        <API />
      </div>
    </PageTransition>
  );
}
