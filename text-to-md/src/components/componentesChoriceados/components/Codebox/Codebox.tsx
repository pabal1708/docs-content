import React, { useState } from "react";
import copy from "copy-to-clipboard";
import classNames from "classnames";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import xonokai from "react-syntax-highlighter/dist/cjs/styles/prism/xonokai";
import CopyIcon from "./CopyIcon";

interface LanguageProps {
  language: string;
  code: string;
}

interface CodeboxProps {
  /** idioma seleccionado */
  lang: "es" | "en" | "pt";
  /** Array de lenguajes a renderizar */
  codeList: Array<LanguageProps>;
  title?: string;
  highlightSyntax?: boolean;
}

const Codebox = ({ codeList, lang, title, highlightSyntax }: CodeboxProps) => {
  const [languageSelected, setLanguageSelected] = useState(
    codeList[0].language
  );
  const [codeToShow, setCodeToShow] = useState(codeList[0].code);
  const [showCopyFeedback, setCopyFeedback] = useState(false);

  const onCopy = () => {
    copy(codeToShow);
    setCopyFeedback(true);
    setTimeout(() => {
      setCopyFeedback(false);
    }, 2000);
  };

  const copyFeedback = {
    es: "Copiado",
    en: "Copied",
    pt: "Copiado",
  };

  const onChangeLanguage = (language: string) => {
    const code = codeList.find((item) => item.language === language);
    setLanguageSelected(language);
    setCodeToShow(code?.code || "");
  };

  const isSameLanguage = (language: string) => language === languageSelected;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between w-full rounded-t-lg bg-dark-20">
        <div className="flex overflow-auto">
          {title && (
            <h3 className="flex items-center justify-center pl-6 text-base font-medium text-primary-500">
              {title}
            </h3>
          )}
          {codeList.map(({ language }) => (
            <button
              key={language}
              data-testid={`language-${language}`}
              className={classNames(
                "flex flex-row items-center justify-center px-6 h-11 rounded-t-lg cursor-pointer text-base font-medium",
                {
                  "text-secondary-500":
                    isSameLanguage(language) && !highlightSyntax,
                  "text-white":
                    (!isSameLanguage(language) && !highlightSyntax) ||
                    (highlightSyntax && isSameLanguage(language)),
                  "text-grey-code":
                    !isSameLanguage(language) && highlightSyntax,
                }
              )}
              onClick={() => {
                onChangeLanguage(language);
              }}
            >
              {language}
            </button>
          ))}
        </div>
        <button
          data-testid="copy-button"
          className="relative items-center justify-center hidden mr-6 text-white align-middle rounded lg:flex hover:text-secondary-500"
          onClick={onCopy}
        >
          <CopyIcon />
          {showCopyFeedback && (
            <span
              data-testid="copy-feedback-button"
              className="absolute bottom-12 text-xs font-medium text-white bg-black py-1.5 px-2 rounded-sm"
            >
              {copyFeedback[lang]}
            </span>
          )}
        </button>
      </div>
      <div
        data-testid={languageSelected}
        className="flex flex-row w-full bg-dark"
      >
        <SyntaxHighlighter
          language={languageSelected}
          showLineNumbers={!highlightSyntax}
          style={xonokai}
          className="w-full bg-dark font-code"
          customStyle={{
            background: "#2F2F2F",
            fontSize: "12px",
            fontFamily: "Fira Code",
            border: "none",
            padding: "14px 24px",
            color: "#fff",
          }}
          codeTagProps={
            highlightSyntax
              ? {
                  style: {
                    color: "#fff",
                    fontSize: "16px",
                  },
                }
              : undefined
          }
        >
          {codeToShow}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

Codebox.defaultProps = {
  highlightSyntax: false,
  title: "",
};

Codebox.displayName = "Codebox";

export type { CodeboxProps };
export default Codebox;
