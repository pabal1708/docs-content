import cn from 'classnames';
import React, { MouseEventHandler, ReactNode } from 'react';

interface ButtonIconProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  onBlur?: () => void;
  href?: string;
  target?: string;
  className?: string;
  variant?: 'styless' | 'default';
  dataTestId?: string;
}

const ButtonIcon = (props: ButtonIconProps) => {
  const { onClick, onBlur, href, target, children, className, variant, dataTestId } = props;

  const classes = cn(
    variant === 'default' &&
      'p-8px rounded-full transition duration-200 ease-in-out bg-transparent text-monochrome-800 bg-transparent text-monochrome-800 hover:bg-monochrome-200 active:bg-monochrome-400',
    className
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        data-testid={dataTestId || 'icon-link'}
        role="button"
        rel="noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      data-testid={dataTestId || 'icon-button'}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};

ButtonIcon.defaultProps = {
  onClick: undefined,
  onBlur: undefined,
  target: undefined,
  href: undefined,
  className: undefined,
  variant: 'default',
  dataTestId: undefined
};

export default ButtonIcon;
