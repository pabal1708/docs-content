import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { HeaderMobileMenuMockData } from './mocks';
import HeaderMobileMenu from '..';

describe('Given Component HeaderMobileMenu', () => {
  describe('When rendered with a all data', () => {
    const { links, button, sidebarData, apiDescription } = HeaderMobileMenuMockData;
    it('Then should show the complete headerMenu', () => {
      const { findByTestId } = render(
        <HeaderMobileMenu
          sidebarData={sidebarData}
          links={links}
          button={button}
          apiDescription={apiDescription}
        />
      );
      const menuMobile = findByTestId('header-menu-mobile');
      expect(menuMobile).to.exist;
    });
  });

  describe('When rendered without button', () => {
    const { links, sidebarData, apiDescription } = HeaderMobileMenuMockData;
    it('Then should show the menu without button option', async () => {
      const { queryByTestId } = render(
        <HeaderMobileMenu sidebarData={sidebarData} links={links} apiDescription={apiDescription} />
      );
      const bottomMenu = await queryByTestId('button-menu');
      expect(bottomMenu).to.be.null;
    });
  });
});
