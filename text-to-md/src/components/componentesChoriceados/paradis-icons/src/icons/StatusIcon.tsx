import React from 'react';
import iconFactory from '../IconBase';

export default iconFactory({
  iconName: 'Status',
  viewBox: '0 0 20 20',
  draw: (
    <>
      <path
        d="M0.5 11H4.5L7 5L10.5 15L14 7L15.5 11H19.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.5C0 2.11929 1.11929 1 2.5 1H17.5C18.8807 1 20 2.11929 20 3.5V16.5C20 17.8807 18.8807 19 17.5 19H2.5C1.11929 19 0 17.8807 0 16.5V3.5ZM2.5 2C1.67157 2 1 2.67157 1 3.5V16.5C1 17.3284 1.67157 18 2.5 18H17.5C18.3284 18 19 17.3284 19 16.5V3.5C19 2.67157 18.3284 2 17.5 2H2.5Z"
        fill="currentColor"
      />
    </>
  )
});
