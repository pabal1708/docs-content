import classNames from 'classnames';
import React from 'react';
import { Size } from '../../commonTypes';
import { ButtonWrapper } from '../Button';
import { CardProps } from './cardTypes';

const defaultStyles = 'rounded-2xl border-1 border-monochrome-300 antialiased';
const backgroundLessStyles = 'rounded-2xl border-none group antialiased';
const transitionUpStyles = 'hover:transition-all transform hover:-translate-y-2';
const transitionShadowStyles = 'transition-shadow hover:shadow-card hover:border-transparent';
const clickableStyles = 'cursor-pointer';

const Card = (props: CardProps) => {
  const {
    className,
    children,
    href,
    onClick,
    backgroundLess,
    transitionUp,
    transitionShadow,
    size = Size.CUSTOM,
    ...buttonProps
  } = props;

  return (
    <ButtonWrapper
      className={classNames(className, {
        [clickableStyles]: href || onClick,
        [defaultStyles]: !backgroundLess,
        [transitionUpStyles]: transitionUp,
        [transitionShadowStyles]: transitionShadow,
        [backgroundLessStyles]: backgroundLess,
        'max-w-518px max-h-266px': size === Size.LARGE,
        'max-w-518px max-h-148px': size === Size.MEDIUM,
        'max-w-344px max-h-124px': size === Size.SMALL
      })}
      href={href}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </ButtonWrapper>
  );
};

Card.defaultProps = {
  children: null,
  className: '',
  backgroundLess: false,
  transitionUp: false,
  transitionShadow: false,
  size: Size.CUSTOM
};

Card.displayName = 'Card';

export default Card;
