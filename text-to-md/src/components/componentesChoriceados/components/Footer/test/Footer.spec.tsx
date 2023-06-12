import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Footer from '..';
import { footerData, footerLiteData } from './footer.mock';
import { FooterTypes } from '../types';

describe('Given Component Footer when rendered', () => {
  it('Then should show the footer in "full" version', () => {
    const { queryByTestId } = render(<Footer type={FooterTypes.full} footerData={footerData} />);
    const footerLogo = queryByTestId('footer-logo');
    const socialsSection = queryByTestId('socials');
    const regulationSection = queryByTestId('regulation');
    const addressSection = queryByTestId('address');
    expect(footerLogo).to.exist;
    expect(socialsSection).to.exist;
    expect(regulationSection).to.exist;
    expect(addressSection).to.exist;
  });

  it('Then should show the footer in "lite" version', () => {
    const { queryByTestId } = render(
      <Footer type={FooterTypes.lite} footerData={footerLiteData} />
    );
    const footerLogo = queryByTestId('footer-logo');
    const socialsSection = queryByTestId('socials');
    const regulationSection = queryByTestId('regulation');
    const addressSection = queryByTestId('address');
    expect(footerLogo).to.not.exist;
    expect(socialsSection).to.exist;
    expect(regulationSection).to.not.exist;
    expect(addressSection).to.not.exist;
  });
});
