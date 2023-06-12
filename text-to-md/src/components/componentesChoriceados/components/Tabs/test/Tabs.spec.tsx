import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Tabs from '..';

describe('Given Component Tabs', () => {
  describe('When rendered with a default props', () => {
    it('Then should show two buttons in the header and no panel', () => {
      render(
        <Tabs defaultValue="tabDefault">
          <Tabs.Header>
            <Tabs.Button value="tab1">Tab1</Tabs.Button>
            <Tabs.Button value="tab2">Tab2</Tabs.Button>
          </Tabs.Header>
          <Tabs.Panel value="tab1">PanelTab1</Tabs.Panel>
          <Tabs.Panel value="tab2">PanelTab2</Tabs.Panel>
        </Tabs>
      );
      const tab1 = screen.getByText('Tab1');
      expect(tab1).to.exist;
      const tab2 = screen.getByText('Tab2');
      expect(tab2).to.exist;
      const panel1 = screen.queryByText('PanelTab1');
      expect(panel1).not.to.be.include;
      const panel2 = screen.queryByText('PanelTab2');
      expect(panel2).not.to.be.include;
    });
  });

  describe('When rendered with a defaultValue ', () => {
    it('Then should show two buttons in the header and one panel', () => {
      render(
        <Tabs defaultValue="tab2">
          <Tabs.Header>
            <Tabs.Button value="tab1">Tab1</Tabs.Button>
            <Tabs.Button value="tab2">Tab2</Tabs.Button>
          </Tabs.Header>
          <Tabs.Panel value="tab1">PanelTab1</Tabs.Panel>
          <Tabs.Panel value="tab2">PanelTab2</Tabs.Panel>
        </Tabs>
      );
      const tab1 = screen.getByText('Tab1');
      expect(tab1).to.exist;
      const tab2 = screen.getByText('Tab2');
      expect(tab2).to.exist;
      const panel1 = screen.queryByText('PanelTab1');
      expect(panel1).not.to.be.include;
      const panel2 = screen.queryByText('PanelTab2');
      expect(panel2).to.be.include;
    });
  });
});
