import React from 'react';
import Section from './link';
import { FooterColumnsData } from '../types';

type ColumnsProps = {
  columnsData: FooterColumnsData;
};

const Column = ({ columnsData: { title, links } }: ColumnsProps) => (
  <div key={title} className="pt-12 max-w-45 lg:pt-0 lg:px-2">
    <p className="flex text-base font-bold">{title}</p>
    {links.map(link => (
      <Section key={link.title} {...link} />
    ))}
  </div>
);

export default Column;
