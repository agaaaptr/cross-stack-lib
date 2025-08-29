'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useSourceCodeToggle } from '@/contexts/source-code-toggle-context';

export function SourceCodeToggle({ children, title }: { children: React.ReactNode; title?: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDisabled = useSourceCodeToggle();

  if (isDisabled) {
    // When disabled (inside tabs), remove the top margin as the parent will handle it.
    return <div className="rounded-md bg-background/95">{children}</div>; // Removed overflow-x-auto
  }

  return (
    <motion.div layout className="mt-4">
      {title && <span className="block text-sm font-semibold mb-2">{title}</span>} {/* Always render as span */}
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Source' : 'View Source'}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="mt-4 rounded-md bg-background/95">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
