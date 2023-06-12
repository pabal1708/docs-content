import React from 'react';
import iconFactory from '../IconBase';

export default iconFactory({
  iconName: 'ErrorCircle',
  draw: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14 14-6.2 14-14S23.8 2 16 2Zm5.4 21L16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6ZM4 16c0 6.6 5.4 12 12 12s12-5.4 12-12S22.6 4 16 4 4 9.4 4 16Z"
      fill="currentColor"
    />
  )
});
