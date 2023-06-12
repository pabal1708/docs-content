import React, { ReactNode, useMemo } from 'react';
import { createWrapperContext, WrapperItemType } from '../context';

type LocaleType = 'es' | 'en' | 'pt';

type CodeContextType = {
  locale: LocaleType;
};

type CodeItemType = WrapperItemType & {
  lang: string;
  code: string;
};

export type CodeWrapperProps = { children: ReactNode; locale: string };

export const context = createWrapperContext<CodeContextType, CodeItemType>({
  locale: 'es'
});

export const { WrapperProvider, context: codeContext } = context;

export const CodeWrapper = ({
  children,
  locale: defaultLocale
}: CodeWrapperProps) => {
  const locale = defaultLocale as LocaleType;
  const contextValue = useMemo<CodeContextType>(
    () => ({
      locale
    }),
    [locale]
  );

  return <WrapperProvider value={contextValue}>{children}</WrapperProvider>;
};
