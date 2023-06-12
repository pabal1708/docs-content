import { ComponentProps, Size } from '../../commonTypes';
import { ButtonWrapperProps } from '../Button/buttonTypes';

export type CardContentProps = ComponentProps & {
  /* Define si queremos tener la card con background o no */
  backgroundLess?: boolean;
  /* Define si queremos tener la card con una transición para arriba cuando se hace el hover */
  transitionUp?: boolean;
  /* Define si queremos tener la card con una transición de sombra cuando se hace el hover */
  transitionShadow?: boolean;
  /* Define el tamaño de la card */
  size?: Size;
};

export type CardProps = ButtonWrapperProps & CardContentProps;
