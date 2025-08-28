'use client';

import { useState, Children, isValidElement, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { SourceCodeToggleContext } from '@/contexts/source-code-toggle-context';
import { motion, AnimatePresence } from 'framer-motion';

type Framework = 'react' | 'vue' | 'angular';

interface FrameworkElementProps {
  'data-framework': Framework;
  children: ReactNode;
}

export function CodeExampleTabs({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<Framework>('react');
  const [isSourceVisible, setIsSourceVisible] = useState(false);

  const tabs = Children.toArray(children).reduce((acc, child) => {
    if (isValidElement<FrameworkElementProps>(child)) {
      const framework = child.props['data-framework'];
      acc[framework] = {
        id: framework,
        label: framework.charAt(0).toUpperCase() + framework.slice(1),
        content: child,
      };
    }
    return acc;
  }, {} as Record<Framework, { id: Framework; label: string; content: ReactNode }>);

  const tabOrder: Framework[] = ['react', 'vue', 'angular'];

  return (
    <div className="my-4">
      <Button variant="outline" onClick={() => setIsSourceVisible(!isSourceVisible)} className="mb-4">
        {isSourceVisible ? 'Hide Source' : 'View Source'}
      </Button>

      <AnimatePresence>
        {isSourceVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mt-4 mb-8"> {/* Added mb-8 */} 
              <div className="flex items-center gap-2 mb-8"> {/* Changed mb-2 to mb-8 */} 
                {tabOrder.map(framework => (
                  tabs[framework] && (
                    <Button
                      key={tabs[framework].id}
                      variant={activeTab === tabs[framework].id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveTab(tabs[framework].id)}
                    >
                      {tabs[framework].label}
                    </Button>
                  )
                ))}
              </div>
              <SourceCodeToggleContext.Provider value={true}>
                <div className="-mt-2"> {/* Removed grid classes */} 
                  <AnimatePresence mode="wait"> {/* Added AnimatePresence for tab content */} 
                    {tabs[activeTab] && (
                      <motion.div
                        key={activeTab} // Key is crucial for AnimatePresence to detect changes
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tabs[activeTab].content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SourceCodeToggleContext.Provider>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}