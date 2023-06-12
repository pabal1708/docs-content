import React, { useEffect, useState } from 'react';
import { AnchorMenuProps } from './anchorMenuTypes';
import Item from './components/Item';

const AnchorMenu = (props: AnchorMenuProps) => {
  const { menuTitle, itemSelected, sections, onClick } = props;
  const [itemIdSelected, setItemIdSelected] = useState(itemSelected || '');

  useEffect(() => {
    setItemIdSelected(itemSelected || '');
  }, [itemSelected]);

  return (
    <aside className="w-216px" aria-label="Anchor Menu">
      <div className="overflow-y-auto text-sm leading-6 rounded bg-gray-50 dark:bg-dark-700 text-monochrome-700 dark:text-monochrome-400">
        <h2 className="font-medium text-monochrome-900 dark:text-monochrome-400 mb-22px">
          {menuTitle}
        </h2>
        <ul className="space-y-5 font-normal">
          {sections.map(({ id, title, tag }) => (
            <Item
              key={id}
              id={id}
              title={title}
              onClick={onClick}
              tag={tag}
              itemIdSelected={itemIdSelected}
              setItemIdSelected={setItemIdSelected}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

AnchorMenu.defaultProps = {
  itemSelected: ''
};

AnchorMenu.displayName = 'AnchorMenu';

export default AnchorMenu;
