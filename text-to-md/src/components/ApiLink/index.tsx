import React, { ReactNode } from 'react';
import Link from 'next/link';
import ApiLogo from './ApiLogo';

type ApiLinkProps = {
  children: ReactNode;
  href: string;
};

const ApiLink = ({ children, href }: ApiLinkProps) => (
  <Link href={href} passHref>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 my-1 text-base font-medium cursor-pointer text-primary-500 hover:text-primary-300"
    >
      {children}
      <ApiLogo />
    </a>
  </Link>
);

export default ApiLink;
