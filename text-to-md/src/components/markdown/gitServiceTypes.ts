export type DocsJsonType = {
  Home: string;
  title: string;
  description: string;
  product: string;
  sectionName: string;
  content?: string;
  sort: string[];
};

export enum Languages {
  es = 'es',
  en = 'en',
  pt = 'pt'
}

export type CardContentType = {
  title: string;
  description: string;
  href: string;
  imgPath?: string;
};

export type CardSectionContentType = {
  title: string;
  cards: CardContentType[];
};

export type LocaleContentType = {
  sidebarSection: string;
  order: { href: string; sidebarName: string; logged: boolean }[];
  title: string;
  description?: string;
  imgPath?: string;
  mainTitle?: string;
  mainCards?: CardSectionContentType[];
  navigationTitle?: string;
  navigationCardsContent?: CardSectionContentType[];
  customMarkdown: string;
};

export type LocalesContentType = {
  [locale in Languages]?: LocaleContentType;
};

export type IndexContentType = {
  hasHome: boolean;
  homeUrl?: string;
  localesContent: LocalesContentType;
};

export type HomeContentType = {
  [homeName: string]: IndexContentType;
};

export type DocsContentType = {
  [docName: string]: string;
};

export type SidebarContentType = {
  id: string;
  title: string;
  href?: string;
  isLoggedDocumentation?: boolean;
  isOneSection?: boolean;
  collapse?: boolean;
  sections?: SidebarContentType[];
};

export type SidebarsContentType = {
  [locale in Languages]?: SidebarContentType;
};

export type RepositoryDataType = {
  docs: DocsContentType;
  homes: HomeContentType;
  sidebars: SidebarsContentType;
};
