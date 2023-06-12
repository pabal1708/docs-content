import React from 'react';

type IconProps = {
  open?: boolean;
  isHeaderMobile?: boolean;
  backSection?: boolean;
};

const transform = ({ open, isHeaderMobile, backSection }: IconProps) => {
  if (backSection) {
    return 'rotate(90)';
  }
  if (isHeaderMobile) {
    return 'rotate(270)';
  }
  return open ? 'rotate(180)' : 'rotate(0)';
};

const Chevron = ({ open, isHeaderMobile, backSection }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    transform={transform({ open, isHeaderMobile, backSection })}
  >
    <path
      d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z"
      fill="currentColor"
    />
  </svg>
);

Chevron.defaultProps = {
  open: false,
  isHeaderMobile: false,
  backSection: false
};

export default Chevron;
