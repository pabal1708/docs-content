import React from 'react';
import { ButtonWrapper } from '../../Button';
import { FooterLinkData } from '../types';
import LinkContent from './linkContent';

const Section = ({ title, href, img }: FooterLinkData) => (
  <ButtonWrapper href={href || '/'} className="flex items-center mt-3 hover:text-primary-600">
    <LinkContent img={img} title={title} />
  </ButtonWrapper>
);

export default Section;
