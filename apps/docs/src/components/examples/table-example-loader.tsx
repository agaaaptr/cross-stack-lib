'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

export const TableExampleLoader = dynamic(
  () => import('@/components/examples/table-example'),
  {
    ssr: false,
    loading: () => <Skeleton className="w-full h-48" />,
  }
);
