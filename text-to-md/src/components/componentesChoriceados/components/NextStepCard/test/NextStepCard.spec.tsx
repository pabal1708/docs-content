import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import NextStepCard from '..';
import { Direction } from '../nextStepCardTypes';

const SampleComponent = () => (
  <div className="flex flex-col p-4">
    <h2 className="text-primary-400">Sample Title</h2>
    <p>Lorem ipsum dolor sit amet consecte.</p>
  </div>
);

const defaultSteps = [
  {
    stepTitle: 'Anterior',
    direction: 'backwards' as Direction,
    href: 'https://google.com',
    children: <SampleComponent />
  },
  {
    stepTitle: 'Próxima',
    direction: 'forward' as Direction,
    href: 'https://pomelo.la',
    children: <SampleComponent />
  }
];

const firstStep = [
  {
    stepTitle: 'Próxima',
    direction: 'forward' as Direction,
    href: 'https://pomelo.la',
    children: <SampleComponent />
  }
];

const lastStep = [
  {
    stepTitle: 'Anterior',
    direction: 'backwards' as Direction,
    href: 'https://pomelo.la',
    children: <SampleComponent />
  }
];

describe('Component Card', () => {
  describe('When rendered with both steps', () => {
    it('Then should show both cards', () => {
      render(<NextStepCard steps={defaultSteps} />);
      const backwardsCard = screen.queryByTestId('testid-backwards');
      const forwardCard = screen.queryByTestId('testid-forward');
      expect(backwardsCard).to.exist;
      expect(forwardCard).to.exist;
    });
  });

  describe('When rendered with only fordward step', () => {
    it('Then should show only the forward card', async () => {
      render(<NextStepCard steps={firstStep} />);
      const backwardsCard = screen.queryByTestId('testid-backwards');
      const forwardCard = screen.queryByTestId('testid-forward');
      expect(backwardsCard).to.not.exist;
      expect(forwardCard).to.exist;
    });
  });
  describe('When rendered with only backwards step', () => {
    it('Then should show only the backwards card', async () => {
      render(<NextStepCard steps={lastStep} />);
      const backwardsCard = screen.queryByTestId('testid-backwards');
      const forwardCard = screen.queryByTestId('testid-forward');
      expect(forwardCard).to.not.exist;
      expect(backwardsCard).to.exist;
    });
  });
});
