import { Children, isValidElement, ReactElement, ReactNode } from 'react';

/**
 * Gets only the valid children of a component, and ignores any nullish or falsy child.
 * @return Array of valid children. 
 */
 export default function getValidChildren(children: ReactNode) {
    return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as ReactElement[]
}
