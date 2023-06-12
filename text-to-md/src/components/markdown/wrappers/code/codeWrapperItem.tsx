import React, { ReactNode, useContext, useEffect } from "react";
import onlyText from "../../../utils/onlyText";
import { codeContext } from "./codeWrapper";

export const CodeWrapperItem = ({
  children,
  lang,
}: {
  children: ReactNode[];
  lang: string;
}) => {
  const { registerItem, unRegisterItem } = useContext(codeContext);

  useEffect(() => {
    const code = onlyText(children);
    registerItem({ id: lang, key: lang, lang, code });
    return () => unRegisterItem({ id: lang, key: lang, lang, code });
  }, [children, registerItem, unRegisterItem, lang]);

  return <></>;
};
