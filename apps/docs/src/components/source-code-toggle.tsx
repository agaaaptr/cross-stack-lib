'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useSourceCodeToggle } from '@/contexts/source-code-toggle-context';

export function SourceCodeToggle({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDisabled = useSourceCodeToggle();

  if (isDisabled) {
    // When disabled (inside tabs), remove the top margin as the parent will handle it.
    return <div className="rounded-md bg-background/95 overflow-x-auto">{children}</div>;
  }

  return (
    <div className="mt-4">
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Source' : 'View Source'}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-md bg-background/95 overflow-x-auto">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
