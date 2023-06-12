import React from 'react';
import classnames from 'classnames';
import * as RadixTabs from '@radix-ui/react-tabs';
import { ComponentProps } from '../../commonTypes';
import { TabButton, TabHeader, TabPanel } from './components';

export type TabsProps = ComponentProps &
  RadixTabs.TabsProps & {
    /** Value del Tab que aparecerá abierto al comienzo */
    defaultValue?: string;
    /** Propagación del evento a cambiar del Tab */
    onValueChange?: () => {};
  };

const Tabs = ({ className, defaultValue, onValueChange, children, ...restProps }: TabsProps) => (
  <RadixTabs.Root
    className={classnames(className)}
    defaultValue={defaultValue}
    onValueChange={onValueChange}
    {...restProps}
  >
    {children}
  </RadixTabs.Root>
);
Tabs.defaultProps = {
  onValueChange: undefined,
  defaultValue: undefined
};
export default Object.assign(
  Tabs,
  { Header: TabHeader },
  { Button: TabButton },
  { Panel: TabPanel }
);
