'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

export const ModalExampleLoader = dynamic(
  () => import('@/components/examples/modal-example'),
  {
    ssr: false,
    loading: () => <Skeleton className="w-full h-40 rounded-lg" />,
  }
);
