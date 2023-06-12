import React from 'react';
import iconFactory from '../IconBase';

export default iconFactory({
  iconName: 'WarningCircle',
  draw: (
    <>
      <path
        d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28Zm0 26a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z"
        fill="currentColor"
      />
      <path d="M17 8h-2v11h2V8ZM16 22a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" fill="currentColor" />
    </>
  )
});
