import type { MDXComponents } from 'mdx/types';
import { CodeBlockWrapper } from '@/components/code-block-wrapper';
import { SourceCodeToggle } from '@/components/source-code-toggle';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const slugCounts: { [key: string]: number } = {};

  const slugify = (text: string) => {
    let baseSlug = text
      .toString()
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[--]+/g, '-');

    if (slugCounts[baseSlug] === undefined) {
      slugCounts[baseSlug] = 0;
    } else {
      slugCounts[baseSlug]++;
    }

    return slugCounts[baseSlug] > 0 ? `${baseSlug}-${slugCounts[baseSlug]}` : baseSlug;
  };

  return {
    h1: ({ children }) => {
      const id = typeof children === 'string' ? slugify(children) : undefined;
      return <h1 id={id} className="text-3xl font-bold tracking-tight md:text-4xl mb-4">{children}</h1>;
    },
    h2: ({ children }) => {
      const id = typeof children === 'string' ? slugify(children) : undefined;
      return <h2 id={id} className="text-2xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">{children}</h2>;
    },
    h3: ({ children }) => {
      const id = typeof children === 'string' ? slugify(children) : undefined;
      return <h3 id={id} className="text-xl font-semibold tracking-tight mt-8 mb-4">{children}</h3>;
    },
    p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
    ul: ({ children }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
    ol: ({ children }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    a: ({ children, href }) => <a href={href} className="font-medium text-primary underline underline-offset-4">{children}</a>,
    pre: ({ children }) => (
      <SourceCodeToggle>
        <CodeBlockWrapper>
          <pre className="max-h-[650px] overflow-x-auto rounded-lg border bg-card py-4 dark:bg-card">{children}</pre>
        </CodeBlockWrapper>
      </SourceCodeToggle>
    ),
    code: ({ children }) => <code className="relative font-mono text-sm font-semibold">{children}</code>,
    table: ({ children }) => <div className="my-6 w-full overflow-y-auto"><table className="w-full">{children}</table></div>,
    thead: ({ children }) => <thead className="[&_tr]:border-b">{children}</thead>,
    tbody: ({ children }) => <tbody className="[&_tr:last-child]:border-0">{children}</tbody>,
    tr: ({ children }) => <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>,
    th: ({ children }) => <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">{children}</th>,
    td: ({ children }) => <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">{children}</td>,
    ...components,
  };
}
