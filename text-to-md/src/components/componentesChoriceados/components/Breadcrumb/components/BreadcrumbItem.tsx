import React, { ReactNode } from 'react';
import Link from 'next/link';

export type BreadcrumbItemsProps = {
  /** Texto dentro del breadcrumb */
  children: ReactNode;
  /** Bool que se agrega en caso de que sea el ultimo child */
  isLastChild?: boolean;
  /** Href de cada item. */
  href?: string;
}

const BreadcrumbItem = (props: BreadcrumbItemsProps) => {
  const { children, isLastChild, href } = props;

  const Divider = () => (
    <span className="m-2 cursor-default text-base font-normal text-monochrome-400">/</span>
  );

  const component =
    href && !isLastChild ? (
      <Link href={href}>
        <a className="font-normal text-monochrome-700 hover:text-monochrome-900" href={href}>
          {children}
        </a>
      </Link>
    ) : (
      <p className="font-medium	text-primary-500 cursor-default">{children}</p>
    );

  return (
    <li className="flex items-center">
      {component}
      {!isLastChild && <Divider />}
    </li>
  );

  
};

BreadcrumbItem.defaultProps = {
  isLastChild: false,
  href: ''
};

export default BreadcrumbItem;
