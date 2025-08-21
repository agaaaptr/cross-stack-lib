import Examples from './examples.mdx';
import API from './api.mdx';
import { PageTransition } from "@/components/page-transition";

export default function ModalPage() {
  return (
    <PageTransition>
      <div className="prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-6 text-primary">XStack Modal Component</h1>
        <Examples />
        <API />
      </div>
    </PageTransition>
  );
}
