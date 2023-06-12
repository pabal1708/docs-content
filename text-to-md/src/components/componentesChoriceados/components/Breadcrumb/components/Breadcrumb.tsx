import React, { cloneElement, ReactNode } from 'react';
import getValidChildren from './getValidChildren';

export interface BreadcrumbProps {
  /** BreadcrumbItems dentro del Breadcrumb */
  children: ReactNode;
  /** Clase principal */
  className?: string;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { children, className } = props;

  const validChildren = getValidChildren(children);
  const count = validChildren.length;

  const childrenClones = validChildren.map((child, index) => {
    const lastChild = count === index + 1;

    return cloneElement(child, {
      isLastChild: lastChild,
    });
  });

  return (
    <nav className={className} role="group" aria-label="Breadcrumb">
      <ol className="flex text-sm items-center">{childrenClones}</ol>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  className: ''
};

export default Breadcrumb;
