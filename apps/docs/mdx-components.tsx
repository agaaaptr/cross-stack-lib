import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 text-primary">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3 text-primary">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-2 text-primary">{children}</h3>,
    p: ({ children }) => <p className="mb-4 text-text-DEFAULT">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-text-DEFAULT">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-text-DEFAULT">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    a: ({ children, href }) => <a href={href} className="text-accent hover:underline">{children}</a>,
    pre: ({ children }) => <pre className="bg-background-light p-4 rounded-md overflow-x-auto mb-4 text-text-DEFAULT text-sm">{children}</pre>,
    code: ({ children }) => <code className="bg-background-lighter px-1 py-0.5 rounded text-accent text-sm">`{children}`</code>,
    table: ({ children }) => <table className="min-w-full bg-background-light rounded-md overflow-hidden mb-4">{children}</table>,
    thead: ({ children }) => <thead className="bg-background-lighter">{children}</thead>,
    tbody: ({ children }) => <tbody className="divide-y divide-background-lighter">{children}</tbody>,
    tr: ({ children }) => <tr className="hover:bg-background-lighter transition-colors duration-200">{children}</tr>,
    th: ({ children }) => <th className="py-2 px-4 text-left text-text-muted font-semibold">{children}</th>,
    td: ({ children }) => <td className="py-2 px-4 text-text-DEFAULT">{children}</td>,
    ...components,
  };
}
