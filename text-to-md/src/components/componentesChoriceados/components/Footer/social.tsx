import React from "react";
import {
  TwitterIcon,
  LinkedinIcon,
} from "../../../componentesChoriceados/paradis-icons";
import { FooterRegulationData } from "./types";

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
  >
    <path
      d="M17.0013 8.88179L8.99963 1.20015L0.997923 8.88179"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type SocialFooterProps = {
  twitter: string;
  linkedin: string;
  copyright: string;
  regulation?: FooterRegulationData;
  slogan?: string;
};

const SocialFooter = ({
  twitter,
  linkedin,
  copyright,
  regulation,
  slogan,
}: SocialFooterProps) => {
  const scrollTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        className="flex pb-4 border-b border-ghost pb-base"
        data-testid="socials"
      >
        <p className="w-full text-2xl text-secondary-500">{slogan}</p>
        <div className="flex items-center">
          <a
            title="Twitter"
            className="mr-3"
            href={twitter}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon size="md" />
          </a>
          <a title="Linkedin" href={linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon size="md" />
          </a>
        </div>
      </section>
      <section className="flex flex-col mt-6 lg:flex-row">
        <small className="w-full text-base text-monochrome-500">
          {copyright}
        </small>
        <div
          className="flex justify-end"
          role="presentation"
          onClick={scrollTop}
          onKeyPress={scrollTop}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:bg-primary-400 bg-primary-600">
            <Arrow />
          </div>
        </div>
      </section>
      {regulation && (
        <section
          className="flex flex-col mt-6 lg:items-center lg:flex-row"
          data-testid="regulation"
        >
          {regulation.image && (
            <a
              href={regulation.link}
              target={regulation.target}
              rel="noreferrer"
            >
              <img
                src={regulation.image}
                alt={regulation.alt}
                width="70"
                height="96"
              />
            </a>
          )}
          <small className="flex flex-col w-full mt-6 text-base text-justify lg:mt-0 lg:ml-10 lg:flex-row text-monochrome-500">
            {regulation.text}
          </small>
        </section>
      )}
    </>
  );
};

SocialFooter.defaultProps = {
  regulation: null,
  slogan: "",
};

export default SocialFooter;
