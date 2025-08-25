'use client';

import dynamic from 'next/dynamic';

export const ModalExampleLoader = dynamic(
  () => import('@/components/examples/modal-example'),
  {
    ssr: false,
    loading: () => <div className="w-full h-12 bg-muted animate-pulse rounded-lg"></div>,
  }
);
