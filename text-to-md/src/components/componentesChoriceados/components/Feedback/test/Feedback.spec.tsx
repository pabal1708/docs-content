import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Sinon from 'sinon';
import { expect } from 'chai';
import Feedback from '..';

const mockOnClickPositive = Sinon.spy();
const mockOnClickNegative = Sinon.spy();

const feedbackMock = {
  feedbackTitle: '¿Te sirvió esta información?',
  thumbsUpClick: {
    title: 'Sí',
    onClick: mockOnClickPositive
  },
  thumbsDownClick: {
    title: 'No',
    onClick: mockOnClickNegative
  }
};

describe('Given Component Feedback', () => {
  describe('When click in positive and negative button', () => {
    it('Then should execute the function of each button', async() => {
      const { findByTestId } = render(
        <Feedback
          feedbackTitle={feedbackMock.feedbackTitle}
          thumbsUpClick={feedbackMock.thumbsUpClick}
          thumbsDownClick={feedbackMock.thumbsDownClick}
        />
      );
      const clickPositive = await findByTestId('positive-button');
      const clickNegative = await findByTestId('negative-button');
      fireEvent.click(clickPositive);
      fireEvent.click(clickNegative);
      expect(mockOnClickPositive).to.have.been.calledOnce;
      expect(mockOnClickNegative).to.have.been.calledOnce;
    });
  });
});
