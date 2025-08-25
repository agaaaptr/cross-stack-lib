'use client';

import { createContext, useContext } from 'react';

export const SourceCodeToggleContext = createContext<boolean>(false);

export const useSourceCodeToggle = () => {
  return useContext(SourceCodeToggleContext);
};
