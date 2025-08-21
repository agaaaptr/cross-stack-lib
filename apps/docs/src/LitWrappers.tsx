// @ts-nocheck
import React from 'react';
import { createComponent } from '@lit-labs/react';
import { XStackTable as XStackTableWC, XStackModal as XStackModalWC } from 'cross-stack-lib';

export const XStackTable = createComponent({
  react: React,
  tagName: 'xstack-table',
  elementClass: XStackTableWC,
  events: {
    // No custom events defined for xstack-table yet
  },
});

export const XStackModal = createComponent({
  react: React,
  tagName: 'xstack-modal',
  elementClass: XStackModalWC,
  events: {
    onClose: 'close', // Map the 'close' custom event from Lit to 'onClose' React prop
  },
});
