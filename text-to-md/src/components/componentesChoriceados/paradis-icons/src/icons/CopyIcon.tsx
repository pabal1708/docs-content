import React from 'react';
import iconFactory from '../IconBase';

export default iconFactory({
  iconName: 'Copy',
  draw: (
    <>
      <path
        d="M28 10v18H10V10h18Zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"
        fill="currentColor"
      />
      <path d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4v14Z" fill="currentColor" />
    </>
  ),
});
