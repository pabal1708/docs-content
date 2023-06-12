import React from 'react';

type LinkContentProps = {
  stepTitle: String;
};

const LinkContentPrev = ({ stepTitle }: LinkContentProps) => (
  <>
    <span className="align-middle">&#60;</span>
    <span className="ml-1">{stepTitle}</span>
  </>
);

const LinkContentNext = ({ stepTitle }: LinkContentProps) => (
  <>
    <span className="mr-1">{stepTitle}</span>
    <span className="align-middle">&#62;</span>
  </>
);

export { LinkContentPrev, LinkContentNext };
