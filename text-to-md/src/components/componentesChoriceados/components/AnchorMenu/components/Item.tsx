import cn from 'classnames';
import React from 'react';
import { ItemProps, TagTypes } from '../anchorMenuTypes';

interface ItemComponentProps extends ItemProps {
  itemIdSelected: string;
  setItemIdSelected: (id: string) => void;
  onClick: (item: ItemProps) => void;
}

const Item = (props: ItemComponentProps) => {
  const { id, title, onClick, itemIdSelected, setItemIdSelected, tag } = props;

  const handleClick = () => {
    const item = {
      id,
      title,
      tag
    };

    onClick(item);
    setItemIdSelected(id);
  };

  const itemTitleClassName = cn('w-40 text-left', {
    'text-primary-500': itemIdSelected === id
  });

  const itemSpanClassName = cn(
    'font-code text-10 leading-14px text-white uppercase height-18px py-0.5 px-2 rounded',
    {
      'bg-info-bright': tag?.type === TagTypes.BLUE,
      'bg-success-bright': tag?.type === TagTypes.GREEN,
      'bg-warning-bright': tag?.type === TagTypes.YELLOW,
      'bg-warning-bright-secondary': tag?.type === TagTypes.ORANGE,
      'bg-error-bright': tag?.type === TagTypes.RED
    }
  );

  return (
    <li aria-label="anchor-item">
      <button
        className="flex items-center justify-between w-full cursor-pointer hover:text-black dark:hover:text-white"
        onClick={handleClick}
        aria-label="anchor-item-button"
      >
        <span className={itemTitleClassName} aria-label="anchor-item-title">
          {title}
        </span>
        {tag && <span className={itemSpanClassName}>{tag.title}</span>}
      </button>
    </li>
  );
};

export default Item;
