import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, assert } from 'chai';
import { Breadcrumb, BreadcrumbItem } from '..';

describe('Component Breadcrumb', () => {
  describe('When rendered with one BreadcrumbItem', () => {
    it('Then should show Breadcrumb without separator', () => {
      render(
        <Breadcrumb>
          <BreadcrumbItem>Label 1</BreadcrumbItem>
        </Breadcrumb>
      );
      const breadcrumb = screen.getByText('Label 1');
      expect(breadcrumb).to.exist;
      expect(breadcrumb.innerHTML.includes(`<nav><ol><li><p>Label 1</p></li></ol></nav>`));
      assert.exists(breadcrumb.className, 'normal');
    });
  });

  describe('When rendered with two or more BreadcrumbItems', () => {
    it('Then should show Breadcrumb with separator and first must be clickeable', () => {
      render(
        <Breadcrumb>
          <BreadcrumbItem href='https://pomelo.la/'>Label 1</BreadcrumbItem>
          <BreadcrumbItem>Label 2</BreadcrumbItem>
        </Breadcrumb>
      );
      const breadcrumb = screen.getByText('Label 1');
      expect(breadcrumb).to.exist;
      expect(breadcrumb.innerHTML.includes(`<nav><ol><li><p>Label 1</p></li>/<li><p>Label 2</p></li></ol></nav>`));
      assert.exists(breadcrumb.className, 'normal');
    });
  });
});
