import React, { useContext, useMemo } from "react";
import { Codebox } from "../../../componentesChoriceados";
import { codeContext } from "./codeWrapper";

export const CodeComponent = () => {
  const { locale, items } = useContext(codeContext);

  const codeList = useMemo(
    () =>
      items.map((item) => ({
        language: item.lang,
        code: item.code,
      })),
    [items]
  );

  return codeList.length ? (
    <Codebox lang={locale} codeList={codeList} />
  ) : (
    <></>
  );
};
