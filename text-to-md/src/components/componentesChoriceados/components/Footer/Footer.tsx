import React from 'react';
import classNames from 'classnames';
import { ComponentProps } from '../../commonTypes';
import FooterAddress from './address';
import FooterColumns from './FooterColumns';
import SocialFooter from './social';
import { SectionFooterData, FooterTypes } from './types';

type LayoutFooterProps = ComponentProps & {
  type: FooterTypes;
  footerData: SectionFooterData;
};

const LayoutFooter = ({ className, type = FooterTypes.full, footerData }: LayoutFooterProps) => {
  const { columns, address, social } = footerData;
  const { twitter, linkedin, copyright, regulation, slogan } = social;

  const footerClassNames = classNames(
    'py-20 section font-sans bg-white dark:bg-dark-700 dark:text-white',
    className
  );

  return (
    <footer className={footerClassNames}>
      {type === FooterTypes.full && (
        <div className="flex flex-col lg:flex-row">
          <FooterAddress AR={address!.AR} BR={address!.BR} />
          <FooterColumns columnsData={columns!} />
        </div>
      )}
      <div className="flex flex-col mt-10">
        <SocialFooter
          twitter={twitter}
          linkedin={linkedin}
          copyright={copyright}
          regulation={regulation}
          slogan={slogan}
        />
      </div>
    </footer>
  );
};

export default LayoutFooter;
