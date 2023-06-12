import classNames from 'classnames';
import React from 'react';

import { ButtonWrapperProps } from './buttonTypes';

const defaultClassNames = 'flex transition-colors';
const defaultActiveClassNames = 'cursor-pointer';

const ButtonWrapper = ({
  children,
  className,
  onClick,
  href,
  target,
  loading,
  disabled
}: ButtonWrapperProps) => {
  const disabledMode = !(href || onClick) || loading || disabled;
  const buttonClassName = classNames(defaultClassNames, className, {
    [defaultActiveClassNames]: !disabledMode
  });

  if (href) {
    return (
      <a
        className={buttonClassName}
        href={disabledMode ? undefined : href}
        onClick={disabledMode ? undefined : onClick}
        target={target}
        rel="noreferrer"
        data-testid="button"
      >
        {children}
      </a>
    );
  }
  if (onClick) {
    return (
      <button
        className={buttonClassName}
        onClick={disabledMode ? undefined : onClick}
        data-testid="button"
      >
        {children}
      </button>
    );
  }

  return (
    <div className={buttonClassName} data-testid="button">
      {children}
    </div>
  );
};

export default ButtonWrapper;
