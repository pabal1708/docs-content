import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { expect } from 'chai';
import Sinon from 'sinon';
import Header from '..'
import { HeaderLogoProps } from '../Header';
import { Logos } from '../HeaderLogo';

const mockOnClick = Sinon.spy();
const logoDeviste:HeaderLogoProps = {
  href: '/',
  type: Logos.DEVSITE
}

const logoDocs:HeaderLogoProps = {
  href: '/',
  type: Logos.DOCS
}

const headerPropsDevsite = {
  onClickNavbarMenu: mockOnClick,
  links: [
    {
      href: 'https://www.google.com',
      title: 'Google'
    },
    {
      href: 'https://www.facebook.com',
      title: 'Facebook'
    },
    {
      href: 'https://www.twitter.com',
      title: 'Twitter'
    }
  ],
  button: {
    href: 'https://www.google.com',
    title: 'Google'
  }
}


describe('Given Component Header', () => {
  describe('When rendered with a devsite property', () => {
    const { links, button } = headerPropsDevsite;
    it('Then should show the devsite logo', () => {
      render(
       <Header isMenuOpen logo={logoDeviste} links={links} button={button} />
      );
    });
  });

  describe('When rendered with a docs property', () => {
    const { links, button } = headerPropsDevsite;
    it('Then should show docs logo', () => {
      render(
       <Header isMenuOpen={false} logo={logoDocs} links={links} button={button} />
      );
    });
  });

  describe('When rendered and click in nav-menu', () => {
    const { links, button, onClickNavbarMenu } = headerPropsDevsite;
    it('Then should show the nav-menu-close', async () => {
      const { findByTestId } = render(
       <Header isMenuOpen={false} logo={logoDocs} links={links} button={button} onClickNavbarMenu={onClickNavbarMenu} />
      );
      const hamburguerButton = await findByTestId('nav-menu');
      fireEvent.click(hamburguerButton);
      const closeButton = await findByTestId('nav-menu-close');
      expect(closeButton).to.be.exist;
    });
  });
});