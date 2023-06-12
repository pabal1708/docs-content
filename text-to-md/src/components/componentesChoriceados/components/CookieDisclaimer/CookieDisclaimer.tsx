import React, { useState } from "react";
import { Button } from "../../../componentesChoriceados/index";
import classNames from "classnames";
import { CloseIcon, GoToIcon } from "../../paradis-icons";
import contents from "./texts";

export interface CookieDisclaimerProps {
  /** onClick : funcion de control para el componente */
  onClick: () => void;
  /** String para determinar el idioma */
  locale: string;
  /** Object de String para reemplazar textos default */
  textContent?: CookieContentType;
}

enum ButtonSize {
  SMALL = "SMALL",
}

export type CookieContentType = {
  title: string;
  description: string;
  descriptionLink: string;
  buttonText: string;
  knowMoreButtonText: string;
  descriptionDetail: string;
  detailLink: string;
  knowMoreLink: string;
};

export enum Languages {
  es = "es",
  en = "en",
  pt = "pt",
}

const CookieDisclaimer = (props: CookieDisclaimerProps) => {
  const { onClick, locale, textContent } = props;
  const content: CookieContentType = contents[locale! as Languages];

  const [showDetail, setShowDetail] = useState(false);
  const {
    title,
    description,
    descriptionLink,
    buttonText,
    knowMoreButtonText,
    descriptionDetail,
    detailLink,
    knowMoreLink,
  } = textContent || content;

  const buttonKnowMore = classNames(
    "lg:ml-5 font-medium lg:pt-0 pt-4 text-primary-500 hover:text-primary-700",
    {
      "text-gray-400": showDetail,
    }
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 w-full p-6 pt-12 pl-5 pr-4 bg-white shadow-top md:pt-10 md:pl-36 md:pb-12 md:pr-10">
      <div className="absolute cursor-pointer lg:right-12 right-4 lg:top-20 top-4">
        <button onClick={onClick}>
          <CloseIcon className="w-6 lg:w-8 text-monochrome-700" />
        </button>
      </div>
      <p className="text-lg font-medium text-monochrome-700">{title}</p>
      <p className="mt-2 text-base text-monochrome-700 md:mr-24">
        {`${description} `}
        <a
          href="https://pomelo.la/policy/"
          className="underline text-primary-500 hover:text-primary-700"
        >
          {descriptionLink}
        </a>
      </p>
      <div className="flex flex-col pt-5 lg:pr-36 lg:flex-row">
        <Button
          size={ButtonSize.SMALL}
          key={buttonText}
          className="text-base"
          onClick={onClick}
        >
          {buttonText}
        </Button>
        <button
          data-testid="showMoreButton"
          className={buttonKnowMore}
          onClick={() => setShowDetail(!showDetail)}
        >
          {knowMoreButtonText}
        </button>
      </div>
      {showDetail && (
        <>
          <p
            className="pb-5 text-base pt-9 text-monochrome-700 md:mr-24"
            data-testid="showDetail"
          >
            {`${descriptionDetail} `}
            <a
              href={detailLink}
              className="text-primary-500 hover:text-primary-700"
            >
              {detailLink}.
            </a>
          </p>
          <div className="flex">
            <a
              href={detailLink}
              target="_blank"
              className="font-medium text-primary-500 hover:text-primary-700"
              rel="noreferrer"
            >
              {knowMoreLink}
            </a>
            <div className="pt-1 ml-1">
              <GoToIcon size="sm" className="text-primary-600" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

CookieDisclaimer.defaultProps = {
  textContent: undefined,
};

CookieDisclaimer.displayName = "CookieDisclaimer";

export default CookieDisclaimer;
