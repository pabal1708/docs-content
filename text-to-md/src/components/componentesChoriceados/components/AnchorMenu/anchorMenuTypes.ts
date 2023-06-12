export enum TagTypes {
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  RED = 'red'
}

export interface TagProps {
  title: string;
  type: TagTypes;
}

export interface ItemProps {
  id: string;
  title: string;
  tag?: TagProps;
}

export interface AnchorMenuProps {
  menuTitle: string;
  itemSelected?: string;
  sections: ItemProps[];
  onClick: (item: ItemProps) => void;
}
