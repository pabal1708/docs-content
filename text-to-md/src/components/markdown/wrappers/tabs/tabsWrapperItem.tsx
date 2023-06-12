import React, { ReactNode, useContext, useEffect } from 'react';
import { tabsContext } from './tabsWrapper';

export const TabsWrapperItem = ({
  children,
  value
}: {
  children: ReactNode;
  value: string;
}) => {
  const { registerItem, unRegisterItem } = useContext(tabsContext);

  useEffect(() => {
    registerItem({ id: value, key: value, content: children });
    return () => unRegisterItem({ id: value, key: value, content: children });
  }, [children, registerItem, unRegisterItem, value]);

  return <></>;
};
