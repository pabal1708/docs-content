import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { expect } from 'chai';
import Sinon from 'sinon';
import CookieDisclaimer from '..';

describe('Given Component CookieDisclaimer', () => {
  describe('When rendered with a locale', () => {
    it('Then should show the diclaimer', () => {
      const onClick = () => Sinon.spy();
      render(<CookieDisclaimer locale="es" onClick={onClick} />);
    });
  });
});

describe('When click in show detail', () => {
  it('Then should show the detail text', async () => {
    const onClick = () => Sinon.spy();
    const { findByTestId } = render(<CookieDisclaimer locale="es" onClick={onClick} />);
    const button = await findByTestId('showMoreButton');
    fireEvent.click(button);
    const detail = await findByTestId('showDetail');
    expect(detail).to.exist;
  });
});
