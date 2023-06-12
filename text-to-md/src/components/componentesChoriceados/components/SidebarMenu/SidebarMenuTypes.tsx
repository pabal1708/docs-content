import { ComponentProps } from '../../commonTypes';

export interface ItemMenuProps {
  id: string;
  title: string;
  onClick?: () => void;
  selected?: boolean;
  sections?: Array<ItemMenuProps>;
  setItemSelectedId?: (id: string) => void;
  itemSelectedId?: string;
  href?: string;
  isOneSection?: boolean;
  setIsOneSectionState?: (state: boolean) => void;
  setSectionSelectedState?: (state: string) => void;
  isHeaderMobile?: boolean;
  isLoggedDocumentation?: boolean;
  isLoggedUser?: boolean;
  tooltipMessage?: string;
}

export interface SidebarMenuProps extends ComponentProps {
  isOneSection: boolean;
  sectionSelected?: string;
  itemPreSelectedId: string;
  sections: Array<ItemMenuProps>;
  isHeaderMobile?: boolean;
  isLoggedUser?: boolean;
  tooltipMessage?: string;
}
