// @ts-nocheck
import React from 'react';
import { createComponent } from '@lit-labs/react';
import { CslTable as CslTableWC, CslModal as CslModalWC } from 'cross-stack-lib';

export const CslTable = createComponent({
  react: React,
  tagName: 'csl-table',
  elementClass: CslTableWC,
  events: {
    // No custom events defined for csl-table yet
  },
});

export const CslModal = createComponent({
  react: React,
  tagName: 'csl-modal',
  elementClass: CslModalWC,
  events: {
    onClose: 'close', // Map the 'close' custom event from Lit to 'onClose' React prop
  },
});
