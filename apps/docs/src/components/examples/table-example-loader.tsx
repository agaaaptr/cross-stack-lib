'use client';

import dynamic from 'next/dynamic';

export const TableExampleLoader = dynamic(
  () => import('@/components/examples/table-example'),
  {
    ssr: false,
    loading: () => <div className="w-full h-48 bg-muted animate-pulse rounded-lg"></div>,
  }
);
