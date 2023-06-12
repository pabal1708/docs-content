import React from 'react';
import { render, screen } from '@testing-library/react';
import Tooltip from '../Tooltip';

describe('Given a Message', () => {
  describe('When rendered with type error', () => {
    it('Then should show the Message', () => {
      render(<Tooltip>Test Message info</Tooltip>);

      screen.getByText('Test Message info');
    });
  });
});
