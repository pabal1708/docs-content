import React, { ReactNode, useMemo } from 'react';
import { createWrapperContext, WrapperItemType } from '../context';

type TabsContextType = {
  activeTab: string;
};

type TabsItemType = WrapperItemType & {
  content: ReactNode;
};

export type TabsWrapperProps = { children: ReactNode; defaultValue: string };

export const context = createWrapperContext<TabsContextType, TabsItemType>({
  activeTab: ''
});

export const { WrapperProvider, context: tabsContext } = context;

export const TabsWrapper = ({ children, defaultValue }: TabsWrapperProps) => {
  const contextValue = useMemo<TabsContextType>(
    () => ({
      activeTab: defaultValue
    }),
    [defaultValue]
  );

  return <WrapperProvider value={contextValue}>{children}</WrapperProvider>;
};
