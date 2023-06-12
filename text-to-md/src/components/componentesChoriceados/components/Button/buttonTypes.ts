import { ReactNode } from 'react';
import { ComponentProps } from '../../commonTypes';

export enum ButtonColor {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  QUATERNARY = 'QUATERNARY',
  INVERTED = 'INVERTED'
}

export enum ButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

export type ButtonColorMapType = {
  [key in ButtonColor]: string;
};

export type ButtonSizeMapType = {
  [key in ButtonSize]: string;
};

export type ButtonWrapperProps = ComponentProps & {
  onClick?: () => void;
  href?: string;
  target?: string;
  loading?: boolean;
  disabled?: boolean;
};

export type ButtonProps = ButtonWrapperProps & {
  text?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactNode;
};
