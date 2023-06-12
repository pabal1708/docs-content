import React from 'react';
import classNames from 'classnames';
import { IconBaseProps } from '../IconBase';

const MastercardIcon = (props: IconBaseProps) => {
  const { size = 'md', className } = props;

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

  const { widthClassname } = measuresBySize[size];

  const classes = classNames(className, widthClassname, 'h-auto');
  return (
    <svg
      className={classes}
      data-testid="MastercardIcon"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25.396 2.67383H14.5713V22.3259H25.396V2.67383Z" fill="#FF5A00" />
      <path
        d="M15.2922 12.5C15.2922 8.50728 17.1497 4.96359 20 2.67395C17.9023 1.00728 15.2562 0 12.3699 0C5.53243 0 0 5.59061 0 12.5C0 19.4094 5.53243 25 12.3699 25C15.2562 25 17.9023 23.9927 20 22.3261C17.1457 20.0688 15.2922 16.4927 15.2922 12.5Z"
        fill="#EB001B"
      />
      <path
        d="M40 12.5C40 19.4094 34.4676 25 27.6301 25C24.7438 25 22.0977 23.9927 20 22.3261C22.8863 20.0324 24.7078 16.4927 24.7078 12.5C24.7078 8.50728 22.8503 4.96359 20 2.67395C22.0937 1.00728 24.7398 0 27.6261 0C34.4676 0 40 5.62702 40 12.5Z"
        fill="#F79E1B"
      />
    </svg>
  );
};

MastercardIcon.defaultProps = {
  size: 'md',
  className: undefined,
  children: undefined,
  iconName: 'Mastercard'
};

export default MastercardIcon;
