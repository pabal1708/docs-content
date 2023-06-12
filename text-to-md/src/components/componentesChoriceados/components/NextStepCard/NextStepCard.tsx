import React from 'react';
import cn from 'classnames';
import Card from '../Card';
import { NextStepCardProps, Step, Direction } from './nextStepCardTypes';
import { LinkContentPrev, LinkContentNext } from './linkContent';

const NextStepCard = (props: NextStepCardProps) => {
  const { className, steps, ...cardProps } = props;

  const isDirectionBackwards = (direction: Direction) => direction === Direction.BACKWARDS;

  const hasOnlyForwardStep = () => steps?.length === 1 && steps[0].direction === Direction.FORWARD;

  const setContainerClasses = () =>
    cn(className, 'font-sans flex flex-col md:flex-row', {
      'justify-between': !hasOnlyForwardStep(),
      'justify-end': hasOnlyForwardStep()
    });

  const setStepClasses = (direction: Direction) =>
    cn('font-medium text-sm text-monochrome-600 my-4', {
      'md:text-left': isDirectionBackwards(direction),
      'md:text-right': !isDirectionBackwards(direction)
    });

  const getLinkComponent = (direction: Direction, stepTitle: string) =>
    isDirectionBackwards(direction) ? (
      <LinkContentPrev stepTitle={stepTitle} />
    ) : (
      <LinkContentNext stepTitle={stepTitle} />
    );

  if (!steps?.length) return null;

  return (
    <div className={setContainerClasses()}>
      {steps.map(({ stepTitle, direction, href, children }: Step) => (
        <div className="flex-col" key={stepTitle} data-testid={`testid-${direction}`}>
          {stepTitle && (
            <div className={setStepClasses(direction)}>
              <a href={href}>{getLinkComponent(direction, stepTitle)}</a>
            </div>
          )}
          <Card href={href} {...cardProps}>
            {children}
          </Card>
        </div>
      ))}
    </div>
  );
};

NextStepCard.displayName = 'NextStepCard';

export default NextStepCard;
