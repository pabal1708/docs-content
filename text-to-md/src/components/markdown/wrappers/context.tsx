import React, {
  createContext,
  ReactNode,
  useMemo,
  useState,
  useCallback,
  Context
} from 'react';

export type WrapperItemType = {
  id: string;
  key: string;
};

type WrapperDefaultContext<Tdata, Tchild> = Tdata & {
  items: Tchild[];
};

type WrapperContext<Tdata, Tchild> = WrapperDefaultContext<Tdata, Tchild> & {
  registerItem: (item: Tchild) => void;
  unRegisterItem: (item: Tchild) => void;
};

type WrapperContextProviderProps = {
  children: ReactNode;
  value: any;
};

type CreateWrapperContextType<Tdata, Tchild> = {
  context: Context<WrapperContext<Tdata, Tchild>>;
  WrapperProvider: (props: WrapperContextProviderProps) => JSX.Element;
};

export const createWrapperContext = <Tdata, Tchild extends WrapperItemType>(
  defaultData: Tdata = {} as Tdata
): CreateWrapperContextType<Tdata, Tchild> => {
  const context = createContext<WrapperContext<Tdata, Tchild>>({
    ...defaultData,
    items: []
  } as unknown as WrapperContext<Tdata, Tchild>);

  const { Provider: DefaultProvider } = context;

  const WrapperProvider = ({
    children,
    value
  }: WrapperContextProviderProps) => {
    const [items, setItems] = useState<Tchild[]>([]);

    const registerItem = useCallback((item: Tchild) => {
      setItems((previous) => [item, ...previous]);
    }, []);

    const unRegisterItem = useCallback((item: Tchild) => {
      setItems((previous) => previous.filter(({ id }) => id !== item.id));
    }, []);

    const contextValue = useMemo<WrapperContext<Tdata, Tchild>>(
      () => ({
        ...value,
        registerItem,
        unRegisterItem
      }),
      [registerItem, unRegisterItem, value]
    );

    return (
      <DefaultProvider value={{ ...contextValue, items }}>
        {children}
      </DefaultProvider>
    );
  };

  return {
    context,
    WrapperProvider
  };
};
