import React from 'react';
import iconFactory from '../IconBase';

export default iconFactory({
  iconName: 'FileDownloadArrowDown',
  draw: (
    <>
      <g clipPath="url(#a)" fill="currentColor">
        <path d="m30 25-1.414-1.414L26 26.172V18h-2v8.172l-2.586-2.586L20 25l5 5 5-5Z" />
        <path d="M18 28H8V4h8v6a2.005 2.005 0 0 0 2 2h6v3h2v-5a.909.909 0 0 0-.3-.7l-7-7A.908.908 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h10v-2Zm0-23.6 5.6 5.6H18V4.4Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </>
  )
});
