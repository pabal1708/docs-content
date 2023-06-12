import * as RadixTabs from '@radix-ui/react-tabs';
import React from 'react';
import { ComponentProps } from '../../../commonTypes';

type TabHeaderProps = RadixTabs.TabsListProps & ComponentProps;


export type { TabHeaderProps };

const TabHeader = ({ children, ...restProps }: TabHeaderProps) => <RadixTabs.List className='border-b-2 border-monochrome-400'{...restProps}>{children}</RadixTabs.List>;

export default TabHeader;
