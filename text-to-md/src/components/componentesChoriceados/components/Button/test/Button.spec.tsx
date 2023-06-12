import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Sinon from 'sinon';
import Button from '..';

describe('Component Button', () => {
  describe('When rendered with children', () => {
    it('Then should show the content', () => {
      render(<Button>Submit</Button>);

      screen.getByText('Submit');
    });
  });

  describe('When rendered with text', () => {
    it('Then should show the text', () => {
      render(<Button text="Submit" />);

      screen.getByText('Submit');
    });
  });

  describe('When rendered with loading flag', () => {
    it('Then should show the spinner', () => {
      render(<Button text="Submit" loading />);

      const spinner = screen.getByTestId('SpinnerIcon');
      expect(spinner).to.exist;
    });
  });

  describe('When rendered with onClick', () => {
    it('Then should show the text and onClick called', async () => {
      const mockOnClick = Sinon.spy();
      const { findByTestId } = render(<Button onClick={mockOnClick}>Text</Button>);
      const button = await findByTestId('button');
      fireEvent.click(button);
      expect(mockOnClick.calledOnce).to.be.true;
    });
  });

  describe('When rendered with onClick but disabled', () => {
    it('Then should show the text but not onClick called', async () => {
      const mockOnClick = Sinon.spy();
      const { findByTestId } = render(
        <Button onClick={mockOnClick} disabled>
          Text
        </Button>
      );
      const button = await findByTestId('button');
      fireEvent.click(button);
      expect(mockOnClick.calledOnce).to.be.false;
    });
  });
});
