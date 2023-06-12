import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Sinon from 'sinon';
import { expect } from 'chai';
import ButtonIcon from '../ButtonIcon';
import NotificationIcon from '../icons/NotificationIcon';

describe('Given ButtonIcon', () => {
  describe('When rendered onClick ', () => {
    it('Then should show Icon and call onClick method', async () => {
      const onClickSpy = Sinon.spy();
      const { findByTestId } = render(
        <ButtonIcon onClick={onClickSpy}>
          <NotificationIcon />
        </ButtonIcon>
      );

      const button = await findByTestId('NotificationIcon');
      fireEvent.click(button);

      expect(onClickSpy).to.be.called;
    });
  });

  describe('When rendered href ', () => {
    it('Then should show a link element', async () => {
      const onClickSpy = Sinon.spy();
      const { findByTestId } = render(
        <ButtonIcon onClick={onClickSpy} href="www.google.com.ar">
          <NotificationIcon />
        </ButtonIcon>
      );

      const button = await findByTestId('NotificationIcon');
      fireEvent.click(button);

      expect(onClickSpy).to.be.called;
    });
  });
});
