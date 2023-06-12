import { Children, isValidElement } from 'react';

// codigo de la lib https://github.com/fernandopasik/react-children-utilities/blob/main/docs/only-text.md
// se copia y pega como util porque da error al queres usarla

const hasChildren = (element: any) =>
  // @ts-ignore
  isValidElement(element) && Boolean(element.props.children);

export const childToString = (child: any) => {
  if (
    typeof child === 'undefined' ||
    child === null ||
    typeof child === 'boolean'
  ) {
    return '';
  }
  if (JSON.stringify(child) === '{}') {
    return '';
  }
  return child.toString();
};
const onlyText = (children: any) => {
  if (!(children instanceof Array) && !isValidElement(children)) {
    return childToString(children);
  }
  return Children.toArray(children).reduce((text, child) => {
    let newText: string;
    if (isValidElement(child) && hasChildren(child)) {
      newText = onlyText(child.props.children);
    } else if (isValidElement(child) && !hasChildren(child)) {
      newText = '';
    } else {
      newText = childToString(child);
    }
    return text + newText;
  }, '');
};
export default onlyText;
