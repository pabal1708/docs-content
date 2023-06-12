import { ReactNode } from 'react';
import { ComponentProps } from '../../commonTypes';

export type NextStepCardContentProps = ComponentProps & {
  /* Define el/los steps a mostrar */
  steps: Array<Step>;
};

export enum Direction {
  BACKWARDS = 'backwards',
  FORWARD = 'forward'
}

export type Step = {
  /** Clase principal */
  stepTitle?: string;
  /** Dirección al cuál se dirige el step */
  direction: Direction;
  /** URL del step */
  href: string;
  /** Children a renderizar dentro del componente */
  children: ReactNode;
};

export type NextStepCardProps = NextStepCardContentProps;
