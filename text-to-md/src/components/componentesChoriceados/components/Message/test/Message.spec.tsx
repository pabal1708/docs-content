import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from '../Message';

describe('Given a Message', () => {
  describe('When rendered with type error', () => {
    it('Then should show the Message', () => {
      render(<Message type="error">Test Message info</Message>);

      screen.getByText('Test Message info');
      screen.getByTestId('error-icon');
    });
  });

  describe('When rendered with type success', () => {
    it('Then should show the Message', async () => {
      render(<Message type="success">Test Message success</Message>);

      screen.getByText('Test Message success');
      screen.getByTestId('success-icon');
    });
  });

  describe('When rendered with type info', () => {
    it('Then should show the Message', async () => {
      render(<Message type="info">Test Message info</Message>);

      screen.getByText('Test Message info');
      screen.getByTestId('info-icon');
    });
  });

  describe('When rendered with type note', () => {
    it('Then should show the Message', async () => {
      render(<Message type="note">Test Message note</Message>);

      screen.getByText('Test Message note');
      screen.getByTestId('note-icon');
    });
  });

  describe('When rendered with type warning', () => {
    it('Then should show the Message', async () => {
      render(<Message type="warning">Test Message warning</Message>);

      screen.getByText('Test Message warning');
      screen.getByTestId('warning-icon');
    });
  });

  describe('When rendered with title', () => {
    it('Then should show the title in Message', async () => {
      render(<Message title="test title" type="warning">Test Message warning</Message>);

      screen.getByText('test title');
    });
  });
});
