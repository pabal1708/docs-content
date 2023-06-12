import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '..';

describe('Component Card', () => {
  describe('When rendered with children', () => {
    it('Then should show the content', () => {
      render(
        <Card>
          <p>Im the content</p>
        </Card>
      );

      screen.getByText('Im the content');
    });
  });

  describe('When rendered with transitionShadow', () => {
    it('Then should show the class in the component', async () => {
      render(<Card transitionShadow>Text</Card>);
      screen.getByText('Text').classList.contains('transition-shadow');
    });
  });
  describe('When rendered with backgroundLess', () => {
    it('Then should show the class border-none', async () => {
      render(<Card transitionShadow>Text</Card>);
      screen.getByText('Text').classList.contains('border-none');
    });
  });
  describe('When rendered with transitionUp', () => {
    it('Then should show the class hover:-translate-y-2', async () => {
      render(<Card transitionShadow>Text</Card>);
      screen.getByText('Text').classList.contains('hover:-translate-y-2');
    });
  });
});
