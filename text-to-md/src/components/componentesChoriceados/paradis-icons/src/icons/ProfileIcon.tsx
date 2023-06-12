import React from 'react';
import iconFactory from '../IconBase';

export default iconFactory({
  iconName: 'Profile',
  draw: (
    <>
      <path
        d="M16 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-5.999A3 3 0 0 1 16 16Z"
        fill="currentColor"
      />
      <path
        d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.004 3.004 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0Zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.001 5.001 0 0 0-4.992 4.926 12 12 0 1 1 15.985 0Z"
        fill="currentColor"
      />
    </>
  ),
});
