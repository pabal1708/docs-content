import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import { sidebarComplete, sidebarWithOneSection, mockOnClick } from './mocks';
import SidebarMenu from '..';

describe('Given Component SidebarMenu', () => {
  afterEach(() => {
    mockOnClick.resetHistory();
  });

  describe('When rendered with a isOneSection in false', () => {
    it('Then should show the full menu', () => {
      render(
        <SidebarMenu
          sections={sidebarComplete.sections}
          sectionSelected={sidebarComplete.sectionSelected}
          itemPreSelectedId={sidebarComplete.itemPreSelectedId}
          isOneSection={sidebarComplete.isOneSection}
        />
      );
    });
  });

  describe('When rendered with isOneSection prop in true', () => {
    it('Then should show one section', () => {
      render(
        <SidebarMenu
          sections={sidebarWithOneSection.sections}
          sectionSelected={sidebarWithOneSection.sectionSelected}
          itemPreSelectedId={sidebarWithOneSection.itemPreSelectedId}
          isOneSection={sidebarWithOneSection.isOneSection}
        />
      );
    });
  });

  describe('When rendered and click on item in first section with onClick', () => {
    it('Then should test the handleClick', async () => {
      const { findByTestId } = render(
        <SidebarMenu
          sections={sidebarComplete.sections}
          sectionSelected={sidebarComplete.sectionSelected}
          itemPreSelectedId={sidebarComplete.itemPreSelectedId}
          isOneSection={sidebarComplete.isOneSection}
        />
      );
      const clickFirstSection = await findByTestId('idseccfsdfsdion');
      fireEvent.click(clickFirstSection);
      expect(mockOnClick).to.have.been.calledOnce;
    });
  });

  describe('When rendered and click on item in first section with href and onClick', () => {
    it('Then should test the handleClick of next link', async () => {
      const { findByTestId } = render(
        <SidebarMenu
          sections={sidebarComplete.sections}
          sectionSelected={sidebarComplete.sectionSelected}
          itemPreSelectedId={sidebarComplete.itemPreSelectedId}
          isOneSection={sidebarComplete.isOneSection}
        />
      );
      const clickSecondSection = await findByTestId('idsectiontest');
      fireEvent.click(clickSecondSection);
      expect(mockOnClick).to.have.been.calledOnce;
    });
  });

  describe('When rendered and click on item in subsection with href and onClick', () => {
    it('Then should show the handleClick of next link', async () => {
      const { findByTestId } = render(
        <SidebarMenu
          sections={sidebarComplete.sections}
          sectionSelected={sidebarComplete.sectionSelected}
          itemPreSelectedId={sidebarComplete.itemPreSelectedId}
          isOneSection={sidebarComplete.isOneSection}
        />
      );
      const clickThirdSection = await findByTestId('ajfhafasdsdafgsdfhjr4sdjfs');
      fireEvent.click(clickThirdSection);
      expect(mockOnClick).to.have.been.calledOnce;
    });
  });

  describe('When rendered and click on item in third level subsection onClick', () => {
    it('Then should test the handleClick of next link', async () => {
      const { findByTestId } = render(
        <SidebarMenu
          sections={sidebarComplete.sections}
          sectionSelected={sidebarComplete.sectionSelected}
          itemPreSelectedId={sidebarComplete.itemPreSelectedId}
          isOneSection={sidebarComplete.isOneSection}
        />
      );
      const clickThirdSection = await findByTestId('ajfhafasdsdasgdghekfcfgsdfhjr4sdjfs');
      fireEvent.click(clickThirdSection);
      expect(mockOnClick).to.have.been.calledOnce;
    });
  });

  describe('When rendered and click in item on section onClick', () => {
    it('Then should show test the handleClick of next link', async () => {
      const { findByTestId } = render(
        <SidebarMenu
          sections={sidebarComplete.sections}
          sectionSelected={sidebarComplete.sectionSelected}
          itemPreSelectedId={sidebarComplete.itemPreSelectedId}
          isOneSection={sidebarComplete.isOneSection}
        />
      );
      const clickThirdSection = await findByTestId('ajfhafasdfassdjfs');
      fireEvent.click(clickThirdSection);
      expect(mockOnClick).to.have.been.calledOnce;
    });
  });

  describe('When rendered in headermobile and click in firstlevel item', () => {
    it('Then should show the back arrow and then when click in arrow should hide it', async () => {
      const { findByTestId, queryByTestId } = render(
        <SidebarMenu
          sections={sidebarComplete.sections}
          itemPreSelectedId={sidebarComplete.itemPreSelectedId}
          isOneSection={false}
          isHeaderMobile
        />
      );
      const clickFirstSectionWithChild = await findByTestId('idseccion');
      fireEvent.click(clickFirstSectionWithChild);
      const arrowBackSidebar = await findByTestId('arrow-back-sidebar');
      expect(arrowBackSidebar).to.be.exist;
      fireEvent.click(arrowBackSidebar);
      expect(queryByTestId('arrow-back-sidebar')).to.be.null;
    });
  });
});
