import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Sinon from 'sinon';
import AnchorMenu from '..';
import { TagTypes } from '../anchorMenuTypes';
import Item from '../components/Item';

const anchorMenuData = {
  menuTitle: 'Users Api',
  sections: [
    {
      id: 'id12',
      title: 'Create User'
    },
    {
      id: 'id13',
      title: 'Get User',
      tag: {
        title: 'GET',
        type: TagTypes.GREEN
      }
    }
  ]
};

describe('Given Component AnchorMenu', () => {
  const handleClick = Sinon.spy();

  describe('When rendered with a menuTitle', () => {
    it('Then should show the menu title', () => {
      render(
        <AnchorMenu
          menuTitle={anchorMenuData.menuTitle}
          sections={anchorMenuData.sections}
          onClick={handleClick}
        />
      );

      screen.getByText('Users Api');
    });
  });

  describe('When rendered with sections', () => {
    it('Then should show all section', () => {
      const { menuTitle, sections } = anchorMenuData;
      render(<AnchorMenu menuTitle={menuTitle} sections={sections} onClick={handleClick} />);

      expect(screen.getAllByLabelText('anchor-item').length).to.be.eq(2);
    });
  });

  describe('When rendered with sections', () => {
    it('Then should show each section\'s title', () => {
      const { menuTitle, sections } = anchorMenuData;
      render(<AnchorMenu menuTitle={menuTitle} sections={sections} onClick={handleClick} />);

      screen.getAllByLabelText('anchor-item-title').forEach((title, index) => {
        expect(title.innerHTML).to.be.eq(sections[index].title);
      });
    });
  });

  describe('When rendering a section with tag', () => {
    it('Then should show the tag in that section', () => {
      const { menuTitle, sections } = anchorMenuData;
      render(<AnchorMenu menuTitle={menuTitle} sections={sections} onClick={handleClick} />);

      if (sections[1].tag) {
        screen.getByText(sections[1].tag.title);
      }
    });
  });

  describe('When rendering a section with tag', () => {
    it('Then should show the correct tag type', () => {
      const { menuTitle, sections } = anchorMenuData;
      render(<AnchorMenu menuTitle={menuTitle} sections={sections} onClick={handleClick} />);

      screen.getByText('GET').classList.contains('bg-success-bright');
    });
  });

  describe('When clicking on an Item', () => {
    it('Then should call the onClick method', async () => {
      const mockItemIdSelected = Sinon.spy();
      const { id, title, tag } = anchorMenuData.sections[1];
      const { findByLabelText } = render(
        <Item
          key={id}
          id={id}
          title={title}
          onClick={handleClick}
          tag={tag}
          itemIdSelected=""
          setItemIdSelected={mockItemIdSelected}
        />
      );
      const item = await findByLabelText('anchor-item-button');
      fireEvent.click(item);
      expect(handleClick.calledOnce).to.be.true;
    });
  });
});
