import * as RadixTabs from '@radix-ui/react-tabs';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { ComponentProps } from '../../../commonTypes';

type TabPanelProps = RadixTabs.TabsContentProps & ComponentProps & {
  /** Valor único que asocia el Button con el Panel. */
  value: string;
}

export type { TabPanelProps };

const TabPanel = ( { children, value, className, ...restProps } : TabPanelProps) => (
    <AnimatePresence>
      <RadixTabs.Content value={value} {...restProps} className={cn('w-full', className)}>
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 8 }}
          exit={{ opacity: 0, x: -8 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </RadixTabs.Content>
    </AnimatePresence>
  );

TabPanel.defaultProps = {
};

export default TabPanel;
