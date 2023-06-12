import React from 'react';
import FooterLogo from './FooterLogo';

type FooterProps = {
  AR: string;
  BR: string;
};

const FooterAddress = ({ AR, BR }: FooterProps) => (
  <div className="max-w-75" data-testid="address">
    <FooterLogo />
    <div className="text-sm lg:text-base">
      <p className="mt-3">{AR}</p>
      <p className="mt-8">{BR}</p>
    </div>
  </div>
);

export default FooterAddress;
