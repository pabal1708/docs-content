import classNames from 'classnames';
import React, { ReactNode } from 'react';

export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconBaseProps {
  children: ReactNode;
  className?: string;
  size?: Size;
  iconName: string;
  iconClassName?: string;
  viewBox?: string;
}
export interface IconFactoryProps {
  draw: ReactNode;
  iconName: string;
  className?: string;
  viewBox?: string;
}

export interface IconProps {
  className?: string;
  size?: Size;
}

const measuresBySize = {
  xxs: {
    widthClassname: 'w-10px'
  },
  xs: {
    widthClassname: 'w-12px'
  },
  sm: {
    widthClassname: 'w-16px'
  },
  md: {
    widthClassname: 'w-24px'
  },
  lg: {
    widthClassname: 'w-48px'
  },
  xl: {
    widthClassname: 'w-56px'
  }
};

const IconBase = (props: IconBaseProps) => {
  const {
    children,
    size = 'md',
    className,
    iconName,
    iconClassName,
    viewBox = '0 0 32 32'
  } = props;

  const { widthClassname } = measuresBySize[size];

  const classes = classNames(className, widthClassname, iconClassName, 'h-auto');

  return (
    <svg
      className={classes}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      data-testid={`${iconName}Icon`}
    >
      {children}
    </svg>
  );
};

IconBase.defaultProps = {
  size: 'md',
  className: undefined,
  iconClassName: undefined,
  viewBox: '0 0 32 32'
};

const iconFactory = (options: IconFactoryProps) => {
  const { draw, iconName, className, viewBox } = options;
  const displayName = `${iconName}Icon`;

  const Icon = (props: IconProps) => (
    <IconBase
      data-testid={displayName}
      {...props}
      iconClassName={className}
      viewBox={viewBox}
      iconName={iconName}
    >
      {draw}
    </IconBase>
  );
  Icon.defaultProps = {
    size: 'md',
    className: undefined
  };

  Icon.displayName = displayName;

  return Icon;
};

export default iconFactory;
