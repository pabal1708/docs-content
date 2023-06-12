import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../../componentesChoriceados";
import classNames from "classnames";
import HeaderLogo, { Logos } from "./HeaderLogo";
import { ComponentProps } from "../../commonTypes";
import NavMenuIcon from "./NavMenuIcon";
import { ButtonWrapperProps } from "../Button/buttonTypes";

export interface HeaderLinkProps {
  href: string;
  title: string;
}

export interface HeaderButtonProps extends ButtonWrapperProps {
  title: string;
}

export interface HeaderLogoProps {
  href: string;
  type: Logos;
}

enum ButtonSize {
  SMALL = "SMALL",
}

export interface HeaderProps extends ComponentProps {
  /** Objeto logo con "href" y "type" */
  logo: HeaderLogoProps;
  /** React node para el dropdown */
  dropdown?: ReactNode;
  /** Menu de login */
  loginDropdown?: ReactNode;
  /** Menu de navegación */
  links?: Array<HeaderLinkProps>;
  /** Boton al final del header */
  button?: HeaderButtonProps;
  /** Modifica el icono del header para abrir y cerrar el navbar (solo mobile) */
  isMenuOpen?: boolean;
  /** Funcion ejecutada cuando se hace click en el menu hamburguesa (solo mobile) */
  onClickNavbarMenu?: () => void;
  /** Bool para mostrar menu hamburguesa */
  showHamburguerMenu?: boolean;
}

const Header = (props: HeaderProps) => {
  const {
    logo,
    children,
    links,
    button,
    dropdown,
    loginDropdown,
    isMenuOpen = false,
    onClickNavbarMenu,
    className,
    showHamburguerMenu,
  } = props;
  const [isOpen, setIsOpen] = useState(isMenuOpen);

  const classNamesHeader = classNames(
    "h-66px lg:h-102px bg-white dark:bg-dark-700 dark:border-b-1 dark:border-grey-dark",
    className
  );

  const onClickNavMenu = () => {
    setIsOpen(!isOpen);
    if (onClickNavbarMenu) {
      onClickNavbarMenu();
    }
  };

  useEffect(() => {
    setIsOpen(isMenuOpen || false);
  }, [isMenuOpen]);

  return (
    <header className={classNamesHeader}>
      <div className="flex items-center justify-between h-full px-5 py-2 lg:px-10">
        <div className="flex items-center">
          <Link href={logo.href}>
            <a className="flex items-center h-34px w-156px lg:h-52px lg:w-246px">
              <HeaderLogo logoType={logo.type} />
            </a>
          </Link>
          <div className="ml-10">{children}</div>
        </div>
        {showHamburguerMenu && (
          <button
            data-testid="nav-menu"
            className="flex cursor-pointer lg:hidden"
            onClick={onClickNavMenu}
          >
            <NavMenuIcon isOpen={isOpen} />
          </button>
        )}
        <nav className="items-center hidden text-base font-medium lg:flex">
          {links?.map(({ href, title }) => (
            <Link href={href} key={href}>
              <a className="mr-10 last:mr-0 dark:text-white text-monochrome-800 hover:text-primary-500 dark:hover:text-primary-500">
                {title}
              </a>
            </Link>
          ))}
          {dropdown && <div className="flex items-center mr-4">{dropdown}</div>}
          {loginDropdown && (
            <div className="flex items-center mr-4">{loginDropdown}</div>
          )}
          {button && (
            <Button
              size={ButtonSize.SMALL}
              href={button.href}
              key={button.href}
              className="px-2 text-base"
            >
              {button.title}
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isMenuOpen: false,
  dropdown: null,
  loginDropdown: null,
  button: null,
  onClickNavbarMenu: null,
  links: null,
  showHamburguerMenu: true,
};

Header.displayName = "Header";

export default Header;
