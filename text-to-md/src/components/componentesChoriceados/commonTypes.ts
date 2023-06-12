import { ReactNode } from 'react';

export type ComponentProps = {
  /** Clase principal */
  className?: string;
  /** Children a renderizar dentro del componente */
  children?: ReactNode;
  key?: string;
};

export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  CUSTOM = 'CUSTOM'
}
