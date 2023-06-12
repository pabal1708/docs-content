import React from "react";
import Markdown from "markdown-to-jsx";
import { DocsContentType } from "../markdown/gitServiceTypes";

import {
  CODE,
  H4,
  H1,
  H2,
  H3,
  P,
  TABLE,
  TD,
  TH,
  THEAD,
  TBODY,
  TR,
  UL,
  OL,
  HR,
  SUBTITLE,
  MESSAGE,
  A,
  APILINK,
  TABS,
  NEXTSTEP,
  CARDS,
  CARD,
  TAB,
  SNIPPETLIST,
  SNIPPET,
} from "./MarkdownWrapper";

const MarkdownRenderer = ({ docsData }: DocsContentType) => (
  <div className="block w-full p-3 m-auto">
    {docsData ? (
      <Markdown
        options={{
          overrides: {
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            p: P,
            code: CODE,
            ul: UL,
            ol: OL,
            table: TABLE,
            thead: THEAD,
            td: TD,
            th: TH,
            tbody: TBODY,
            tr: TR,
            hr: HR,
            Subtitle: SUBTITLE,
            Message: MESSAGE,
            a: A,
            ApiLink: APILINK,
            Tabs: TABS,
            Tab: TAB,
            NextStepCard: NEXTSTEP,
            Cards: CARDS,
            Card: CARD,
            SnippetList: SNIPPETLIST,
            Snippet: SNIPPET,
          },
          wrapper: "article",
        }}
      >
        {docsData}
      </Markdown>
    ) : (
      <p>The requested documentation is not available</p>
    )}
  </div>
);
export default MarkdownRenderer;
