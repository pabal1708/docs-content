import React from 'react';
import classNames from 'classnames';
import { IconBaseProps } from '../IconBase';

const VisaDisabledIcon = (props: IconBaseProps) => {
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
      data-testid="VisaIcon"
      width="62"
      height="20"
      viewBox="0 0 62 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26.4912 19.7115H21.5391L24.6365 0.350952H29.5883L26.4912 19.7115Z" fill="#B4B4B4" />
      <path
        d="M44.4429 0.824254C43.4661 0.432522 41.9169 0 40.0012 0C35.1109 0 31.6671 2.63619 31.646 6.40515C31.6054 9.18587 34.1116 10.7304 35.9861 11.6575C37.902 12.605 38.5533 13.2234 38.5533 14.0679C38.5338 15.3649 37.0051 15.9628 35.5793 15.9628C33.6022 15.9628 32.5429 15.6545 30.933 14.9329L30.2809 14.6236L29.5879 18.9696C30.7494 19.5045 32.8892 19.9792 35.1109 20C40.307 20 43.6898 17.4046 43.7299 13.3882C43.7497 11.1842 42.4263 9.49548 39.5731 8.11552C37.8411 7.22967 36.7803 6.63236 36.7803 5.72598C36.8007 4.902 37.6775 4.05803 39.6327 4.05803C41.2426 4.0167 42.4254 4.40788 43.3215 4.79934L43.7694 5.00493L44.4429 0.824254V0.824254Z"
        fill="#B4B4B4"
      />
      <path
        d="M51.0241 12.8527C51.4319 11.7405 53.0012 7.43581 53.0012 7.43581C52.9806 7.47715 53.4082 6.30305 53.6527 5.58227L53.9988 7.25049C53.9988 7.25049 54.9366 11.8848 55.1402 12.8527C54.3663 12.8527 52.0022 12.8527 51.0241 12.8527ZM57.1368 0.350952H53.3064C52.1251 0.350952 51.2277 0.700802 50.7181 1.9573L43.3623 19.7112H48.5584C48.5584 19.7112 49.4139 17.3217 49.5978 16.807C50.1678 16.807 55.2225 16.807 55.9559 16.807C56.098 17.4867 56.5468 19.7112 56.5468 19.7112H61.1319L57.1368 0.350952V0.350952Z"
        fill="#B4B4B4"
      />
      <path
        d="M17.4021 0.350952L12.5524 13.553L12.0224 10.8755C11.1258 7.78594 8.31382 4.42924 5.17578 2.7602L9.61799 19.6909H14.8547L22.6386 0.350952H17.4021V0.350952Z"
        fill="#B4B4B4"
      />
      <path
        d="M8.049 0.350952H0.0815105L0 0.742137C6.21514 2.34876 10.3313 6.22147 12.0224 10.8763L10.2904 1.97838C10.0053 0.741864 9.12895 0.391741 8.049 0.350952Z"
        fill="#7E7E7E"
      />
    </svg>
  );
};

VisaDisabledIcon.defaultProps = {
  size: 'md',
  className: undefined,
  children: undefined,
  iconName: 'VisaDisabled'
};

export default VisaDisabledIcon;
