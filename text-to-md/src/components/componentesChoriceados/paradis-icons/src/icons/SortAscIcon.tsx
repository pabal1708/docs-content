import React from 'react';
import iconFactory from '../IconBase';

export default iconFactory({
  iconName: 'SortAsc',
  draw: (
    <>
      <path
        d="M27.6 20.6 24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6 6-6-1.4-1.4Z"
        fill="currentColor"
        fillOpacity={0.2}
      />
      <path d="m9 4-6 6 1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10 9 4Z" fill="currentColor" />
    </>
  ),
});
