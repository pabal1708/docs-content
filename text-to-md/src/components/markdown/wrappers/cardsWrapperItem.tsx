import React from "react";
import { Card } from "../../componentesChoriceados";

export const CardsWrapperItem = ({
  href,
  title,
  description,
  number,
}: {
  href: string;
  title: string;
  description: string;
  number: string;
}) => (
  <>
    <Card key={title} transitionShadow href={href}>
      <div className="flex items-baseline w-full px-6 py-7">
        <div className="flex items-center justify-center w-5 h-5 mr-2 text-xs font-medium text-white rounded-full bg-primary-500">
          {number}
        </div>
        <div className="flex-1">
          <p className="pb-2 text-md text-primary-600 text-leading-8">
            {title}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  </>
);
