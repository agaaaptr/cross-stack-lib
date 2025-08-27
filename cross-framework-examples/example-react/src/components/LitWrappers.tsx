// src/components/LitWrappers.tsx
'use client';

import React from 'react';
import { createComponent } from '@lit-labs/react';
import { XStackTable as XStackTableWC, XStackModal as XStackModalWC } from 'cross-stack-lib';

export const XStackTable = createComponent({
  react: React,
  tagName: 'xstack-table',
  elementClass: XStackTableWC,
  events: {
    onSearch: 'search',
    onPageChange: 'pageChange',
  },
});

export const XStackModal = createComponent({
  react: React,
  tagName: 'xstack-modal',
  elementClass: XStackModalWC,
  events: {
    onClose: 'close',
  },
});