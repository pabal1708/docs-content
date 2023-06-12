import { ReactNode } from 'react';

export enum PageName {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  CONTACT_US = 'CONTACT_US',
  CARDS = 'CARDS',
  WORK_WITH_US = 'WORK_WITH_US',
  IDENTITY = 'IDENTITY',
  CORE = 'CORE',
  APPLY = 'APPLY',
  POLICY = 'POLICY',
  TERMS_AND_CONDITIONS = 'TERMS_AND_CONDITIONS',
  NOT_FOUND = 'NOT_FOUND',
  STARTUPS = 'STARTUPS'
}

export type SiteMapTypeLocale<T> = {
  [key in Sites]?: T;
};

export enum Sites {
  ar = 'ar',
  es = 'es',
  br = 'br',
  mx = 'mx',
  co = 'co',
  pe = 'pe',
  en = 'en'
}

export enum FooterTypes {
  lite = 'lite',
  full = 'full'
}

export type WebsiteContent = {
  title: string;
  description: string;
  keywords: string;
  components: ComponentData[];
};

export type PathData = {
  ar?: string;
  es?: string;
  mx?: string;
  en?: string;
  br?: string;
  pe?: string;
};

export type ComponentProps = {
  className?: string;
  children?: ReactNode;
};

export type ComponentData = {
  name: string;
  key: string;
  props?: ComponentProps;
  components?: ComponentData[];
};

export const countryToLocale: SiteMapTypeLocale<string> = {
  en: 'en-US',
  es: 'es-419',
  ar: 'es-AR',
  br: 'pt-BR',
  mx: 'es-MX',
  co: 'es-CO',
  pe: 'es-PE'
};

export type WebsiteContentLanguage = {
  language: Sites;
  content: WebsiteContent;
};

export type SectionFooterData = {
  columns?: FooterColumnsData[];
  address?: FooterAdressData;
  social: FooterSocialData;
};

export type FooterColumnsData = {
  title: string;
  links: FooterLinkData[];
};

export type FooterLinkData = {
  title: string;
  name?: PageName;
  href?: string;
  img?: string;
  id?: string;
};

export type FooterAdressData = {
  AR: string;
  BR: string;
};

export type FooterSocialData = {
  copyright: string;
  regulation?: FooterRegulationData;
  twitter: string;
  linkedin: string;
  slogan?: string;
};

export type NavbarMenuData = {
  title: string;
  subMenu?: NavbarSubMenuData[];
  link?: PageName;
  href?: string;
};

export type NavbarSubMenuData = {
  title: string;
  subTitle: string;
  img?: string;
  link?: PageName;
  href?: string;
};

export enum ButtonColor {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  QUATERNARY = 'QUATERNARY'
}

export enum ButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

export type ButtonProps = ComponentProps & {
  text?: string;
  onClick?: () => void;
  color?: ButtonColor;
  size?: ButtonSize;
  key?: string;
  name?: PageName;
  href?: string;
};

export type NavbarButtonsData = {
  login: ButtonProps;
  contact?: ButtonProps;
};

export type FooterRegulationData = {
  image: string;
  link: string;
  alt: string;
  target: string;
  text: string;
};
