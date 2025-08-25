'use client';
// @ts-nocheck
import React from 'react';
import { createComponent } from '@lit-labs/react';
import { useTheme } from 'next-themes';
import { XStackTable as XStackTableWC, XStackModal as XStackModalWC } from 'cross-stack-lib';

const XStackTableComponent = createComponent({
  react: React,
  tagName: 'xstack-table',
  elementClass: XStackTableWC,
  events: {},
});

const XStackModalComponent = createComponent({
  react: React,
  tagName: 'xstack-modal',
  elementClass: XStackModalWC,
  events: {
    onClose: 'close',
  },
});

export const XStackTable = (props: any) => {
  const { theme } = useTheme();
  return <XStackTableComponent {...props} theme={theme} />;
};

export const XStackModal = (props: any) => {
  const { theme } = useTheme();
  return <XStackModalComponent {...props} theme={theme} />;
};