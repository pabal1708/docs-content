import * as RadixTabs from '@radix-ui/react-tabs';
import cn from 'classnames';
import React from 'react';
import { ComponentProps } from '../../../commonTypes';

type TabButtonProps =  RadixTabs.TabsTriggerProps & ComponentProps & {
  /** Valor único que asocia el Button con el Panel. */
  value: string;
  /** Si es true, no se podra visualizar el panel de este Tab */
  disabled?: boolean;
}

export type { TabButtonProps };

const TabButton = ({ children, disabled, className, value, ...restProps }: TabButtonProps)  => {

  const classes = cn(
    'tab-button-citric px-6 pt-3 pb-2.5 rounded-t-lg -mb-0.5',
    'text-base text-monochrome-600',
    'active:border-primary-500 active:text-primary-500',
    'focus:divide-primary-500 focus:text-primary-500',
    'hover:bg-monochrome-200',
    { 'text-monochrome-500 cursor-not-allowed': disabled }
  );

  return (
    <RadixTabs.Trigger
      className={cn(classes, className)}
      value={value}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </RadixTabs.Trigger>
  );
};

TabButton.defaultProps = {
  disabled: false,
};

export default TabButton;
