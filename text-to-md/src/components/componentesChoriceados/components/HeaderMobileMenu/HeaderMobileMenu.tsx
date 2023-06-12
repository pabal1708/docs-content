import React, { ReactNode } from "react";
import Link from "next/link";
import { StatusIcon } from "../../../componentesChoriceados/paradis-icons";
import classNames from "classnames";
import SidebarMenu from "../SidebarMenu";
import { ComponentProps } from "../../commonTypes";
import { SidebarMenuProps } from "../SidebarMenu/SidebarMenuTypes";
import { ButtonProps } from "../Button/buttonTypes";
import Button from "../Button";

export interface HeaderLinkProps {
  href: string;
  title: string;
}

export interface HeaderButtonProps extends ButtonProps {
  statusTitle?: string;
}

export interface ApiDescriptionProps {
  title: string;
  version: string;
}

export interface HeaderMobileMenuProps extends ComponentProps {
  /** Descripción de la prop */
  sidebarData: SidebarMenuProps;
  /** React node para el dropdown */
  dropdown?: ReactNode;
  /** Menu de navegación */
  links?: Array<HeaderLinkProps>;
  /** Boton al final del header */
  button?: HeaderButtonProps;
  /** prop para mostrar la descripcion de api y su version */
  apiDescription?: ApiDescriptionProps;
  /** Dropdown para efectuar login */
  loginDropdown?: ReactNode;
  /** prop para mostrar el status del usr en auth0 */
  isLoggedUser?: boolean;
}

const HeaderMobileMenu = (props: HeaderMobileMenuProps) => {
  const {
    children,
    sidebarData,
    links,
    dropdown,
    button,
    apiDescription,
    className,
    loginDropdown,
    isLoggedUser,
  } = props;
  const { sections, itemPreSelectedId, isOneSection } = sidebarData;

  const classNamesHeaderMobile = classNames(
    "w-full bg-white dark:bg-dark-700 flex flex-col",
    className
  );

  return (
    <div data-testid="header-menu-mobile" className={classNamesHeaderMobile}>
      <div className="flex flex-col h-full overflow-y-auto">
        {children && <div className="flex w-full px-5 pt-6">{children}</div>}
        {apiDescription && (
          <div className="flex w-full px-5 mt-6 text-sm font-normal">
            <span className="mr-2 text-monochrome-600">
              {apiDescription.title}
            </span>
            <span className="px-1 rounded text-monochrome-500 bg-monochrome-900">
              {apiDescription.version}
            </span>
          </div>
        )}
        <div className="w-full px-3 mb-8 mt-7">
          <SidebarMenu
            isOneSection={isOneSection}
            sections={sections}
            isHeaderMobile
            itemPreSelectedId={itemPreSelectedId}
            isLoggedUser={isLoggedUser}
          />
        </div>
        <nav className="flex flex-col py-6 mx-5 text-sm font-medium border-t-1 border-grey-light dark:border-grey-dark">
          {links?.map(({ href, title }) => (
            <Link href={href} key={href}>
              <a className="mb-4 last:mb-0 dark:text-white text-monochrome-800 hover:text-primary-500 dark:hover:text-primary-500">
                {title}
              </a>
            </Link>
          ))}
          {dropdown && <div className="flex items-center mr-4">{dropdown}</div>}
          {loginDropdown && (
            <div className="flex items-center mr-4">{loginDropdown}</div>
          )}
        </nav>
      </div>
      {button && (
        <div
          data-testid="button-menu"
          className="bottom-0 flex flex-col w-full px-5 py-6 bg-white dark:bg-dark-700 border-t-1 border-grey-light dark:border-grey-dark "
        >
          {button.statusTitle && (
            <a
              href="https://status.pomelo.la"
              rel="noreferrer"
              target="_blank"
              className="flex items-center text-sm font-normal hover:text-primary-500 dark:hover:text-primary-500 dark:text-monochrome-400 text-monochrome-800"
            >
              <StatusIcon className="mr-2" />
              <span className="mr-2">{button.statusTitle}</span>
            </a>
          )}
          {button.href && button.text && (
            <Button
              href={button.href}
              key={button.href}
              className="w-full px-2 mt-6"
            >
              {button.text}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

HeaderMobileMenu.defaultProps = {
  dropdown: null,
  links: null,
  button: null,
  apiDescription: null,
  loginDropdown: null,
  isLoggedUser: false,
};

HeaderMobileMenu.displayName = "HeaderMobileMenu";

export default HeaderMobileMenu;
