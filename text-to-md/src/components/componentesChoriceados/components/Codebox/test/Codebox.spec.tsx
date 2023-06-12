import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Codebox from '..';

const codeListMock = [
  {
    language: 'javascript',
    code: `console.log('hello world');`
  },
  {
    language: 'php',
    code: `<?php echo 'Hello World'; ?>`
  },
  {
    language: 'python',
    code: `print('Hello World')`
  },
  {
    language: 'ruby',
    code: `puts 'Hello World'`
  },
  {
    language: 'java',
    code: `public class HelloWorld {
public static void main(String[] args) {
System.out.println("Hello, World");
}
}`
  }
];

describe('even Component Codebox', () => {
  describe('When rendered', () => {
    it('Then should show Codebox component', () => {
      render(<Codebox lang="es" codeList={codeListMock} />);
    });
  });

  describe('When click in language button', () => {
    it('Then should show the code of the language selected', async () => {
      const { findByTestId } = render(<Codebox lang="pt" codeList={codeListMock} />);
      const button = await findByTestId('language-javascript');
      fireEvent.click(button);
      const languageContainer = screen.getByTestId('javascript');
      expect(languageContainer).to.exist;
    });
  });

  describe('When click in copy button', () => {
    it('Then should show the feedback', async () => {
      const { findByTestId } = render(<Codebox lang="en" codeList={codeListMock} />);
      const button = await findByTestId('copy-button');
      fireEvent.click(button);
      const feedback = screen.getByTestId('copy-feedback-button');
      expect(feedback).to.exist;
      setTimeout(() => {
        expect(feedback).to.not.exist;
      }, 3000);
    });
  });

  describe('When have a title', () => {
    it('Then should show the title', () => {
      render(<Codebox lang="es" codeList={codeListMock} title="BASEPATH" />);
      const title = screen.getByText('BASEPATH');
      expect(title).to.exist;
    });
  });
});
