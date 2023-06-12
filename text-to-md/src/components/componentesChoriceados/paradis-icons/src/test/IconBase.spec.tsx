import React from 'react';
import { render } from '@testing-library/react';
import iconFactory from '../IconBase';

describe('Given iconFactory', () => {
  describe('When rendered with a Path ', () => {
    it('Then should show Icon and call onClick method', async () => {
      const Icon = iconFactory({
        iconName: 'Test',
        draw: <path />,
      });

      const { findByTestId } = render(<Icon />);

      await findByTestId('TestIcon');
    });
  });
});
