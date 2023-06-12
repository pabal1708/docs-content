import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

export type MarkDownContentType = {
  currentDoc: string;
};

const Markdown = ({ currentDoc }: MarkDownContentType) => (
  <div className="">
    {currentDoc ? (
      <div className="flex w-full bg-white">
        <MarkdownRenderer docsData={currentDoc} />
      </div>
    ) : (
      <p>Te dije que ingreses un texto!</p>
    )}
  </div>
);
export default Markdown;
