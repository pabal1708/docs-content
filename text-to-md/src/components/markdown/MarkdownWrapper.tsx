import React, { ReactNode } from "react";
import {
  Message,
  NextStepCard,
} from "../../../src/components/componentesChoriceados/";
import ApiLink from "../../components/ApiLink";
import { parseStringToMarkdownJson } from "../utils/stringUtils";
import {
  TabsComponent,
  TabsWrapper,
  TabsWrapperItem,
  TabsWrapperProps,
} from "./wrappers/tabs";
import {
  CodeComponent,
  CodeWrapper,
  CodeWrapperItem,
  CodeWrapperProps,
} from "./wrappers/code";
import { CardsWrapperItem } from "./wrappers/cardsWrapperItem";

export const H1 = ({ children, ...props }: { children: [string] }) => (
  <h1 {...props} className="mb-4 font-medium text-black text-t-h1 leading-12">
    {children.map((child) => child.toString().trim())}
  </h1>
);

export const H2 = ({ children, ...props }: { children: [string] }) => (
  <h2
    {...props}
    className="pt-10 mb-2 text-2xl font-medium text-black leading-12"
  >
    {children.map((child) => child.toString().trim())}
  </h2>
);

export const H3 = ({ children, ...props }: { children: ReactNode }) => (
  <h3
    {...props}
    className="pt-6 pb-2 text-3xl font-medium leading-10 text-black"
  >
    {children}
  </h3>
);

export const H4 = ({ children, ...props }: { children: ReactNode }) => (
  <h4 {...props} className="pt-4 pb-2 text-base text-gray-200 font-titles">
    {children}
  </h4>
);

export const P = ({ children, ...props }: { children: ReactNode }) => (
  <p {...props} className="mb-4 text-base leading-7 text-black">
    {children}
  </p>
);

export const CODE = ({ children, ...props }: { children: ReactNode }) => (
  <code
    {...props}
    className="px-1.5 py-0.5 text-xs font-medium text-gray-200 bg-gray-800 rounded-lg font-code align-middle"
  >
    {children}
  </code>
);

export const UL = ({ children, ...props }: { children: ReactNode }) => (
  <ul {...props} className="pl-6 mt-4 mb-6 text-base list-disc">
    {children}
  </ul>
);

export const OL = ({ children, ...props }: { children: ReactNode }) => (
  <ol
    {...props}
    className="pl-6 mt-4 mb-6 text-sm list-decimal marker:font-semibold marker:ml-2"
  >
    {children}
  </ol>
);

export const TABLE = ({ children, ...props }: { children: ReactNode }) => (
  <div className="table w-screen -mx-5 table-fixed md:w-full md:mx-0">
    <div className="table-cell px-5 overflow-x-auto md:px-0">
      <table
        {...props}
        className="w-full my-4 text-sm text-left text-gray-200 table-fixed min-w-120 max-w-none inline-table"
      >
        {children}
      </table>
    </div>
  </div>
);

export const THEAD = ({ children, ...props }: { children: ReactNode }) => (
  <thead {...props} className="text-sm text-gray-500">
    {children}
  </thead>
);

export const TD = ({ children, ...props }: { children: ReactNode }) => (
  <td
    {...props}
    className="py-3.5 px-4 align-top bottom text-monochrome-700 leading-5"
  >
    {children}
  </td>
);

export const TBODY = ({ children, ...props }: { children: ReactNode }) => (
  <tbody {...props} className="custom-shadow">
    {children}
  </tbody>
);

export const TR = ({ children, ...props }: { children: ReactNode }) => (
  <tr
    {...props}
    className="border-b even:bg-white odd:bg-monochrome-100 border-monochrome-200"
  >
    {children}
  </tr>
);

export const TH = ({ children, ...props }: { children: ReactNode }) => (
  <th
    {...props}
    className="px-4 py-2.5 text-sm text-gray-500 font-medium bg-white leading-5"
  >
    {children}
  </th>
);

export const HR = ({ children, ...props }: { children: ReactNode }) => (
  <hr {...props} className="mt-10 border-t border-monochrome-400" />
);

export const SUBTITLE = ({ children, ...props }: { children: ReactNode }) => (
  <p {...props} className="mb-2 text-2xl font-normal leading-7 text-black">
    {children}
  </p>
);

export const MESSAGE = ({ children, ...props }: { children: ReactNode }) => (
  // @ts-ignore
  <Message {...props} className="my-10">
    {children}
  </Message>
);

export const A = ({ children, ...props }: { children: ReactNode }) => (
  <a
    {...props}
    className="font-medium leading-6 text-primary-500 hover:text-primary-300"
  >
    {children}
  </a>
);

export const APILINK = ({ children, ...props }: { children: ReactNode }) => (
  // @ts-ignore
  <ApiLink {...props}>{children}</ApiLink>
);

export const NEXTSTEP = ({
  children,
  steps,
  ...props
}: {
  children: ReactNode;
  steps: string;
}) => {
  const formattedSteps = parseStringToMarkdownJson(steps);
  const reactSteps = formattedSteps.map((step: any) => ({
    ...step,
    children: (
      <div className="flex flex-col p-4 text-sm font-medium leading-6 text-left min-w-73">
        <h2 className="text-primary-400">{step.cardTitle}</h2>
        {step.description && <p>{step.description}</p>}
      </div>
    ),
  }));

  return (
    <NextStepCard
      {...props}
      steps={reactSteps}
      className="mt-12 lg:min-w-175 lg:w-full md:min-w-full"
    >
      {children}
    </NextStepCard>
  );
};

export const CARDS = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1 gap-4 mb-12 lg:grid-cols-2 xl:grid-cols-3">
    <>{children}</>
  </div>
);

export const CARD = CardsWrapperItem;

export const TABS = ({ children, defaultValue }: TabsWrapperProps) => (
  <TabsWrapper defaultValue={defaultValue}>
    <TabsComponent />
    {children}
  </TabsWrapper>
);

export const TAB = TabsWrapperItem;

export const SNIPPETLIST = ({ children, locale }: CodeWrapperProps) => (
  <CodeWrapper locale={locale}>
    <CodeComponent />
    {children}
  </CodeWrapper>
);

export const SNIPPET = CodeWrapperItem;
