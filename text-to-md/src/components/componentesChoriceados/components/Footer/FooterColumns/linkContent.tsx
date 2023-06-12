import React from 'react';
import { FooterLinkData } from '../types';

const LinkContent = ({ title, img: Img }: FooterLinkData) => (
  <>
    {Img && (
      <span className="flex items-center mr-2">
        <Img />
      </span>
    )}
    {title}
  </>
);

export default LinkContent;
