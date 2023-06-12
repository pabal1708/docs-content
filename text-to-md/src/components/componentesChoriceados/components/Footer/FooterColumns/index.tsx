import React from 'react';
import Column from './columnContent';
import { FooterColumnsData } from '../types';

type ColumnsProps = {
  columnsData: FooterColumnsData[];
};

const ColumnsFooter = ({ columnsData }: ColumnsProps) => (
  <div className="flex flex-col w-full lg:flex-row justify-evenly lg:ml-50">
    {columnsData.map(groups => (
      <Column key={groups.title} columnsData={groups} />
    ))}
  </div>
);

export default ColumnsFooter;
