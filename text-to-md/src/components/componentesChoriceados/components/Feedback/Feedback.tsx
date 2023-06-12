import React from "react";
import { Button } from "../../../componentesChoriceados";
import classNames from "classnames";
import { ThumbsIcon } from "../../../componentesChoriceados/paradis-icons";
import { ComponentProps } from "../../commonTypes";

type FeedbackOptionsProps = {
  title: string;
  onClick: () => void;
};

export interface FeedbackProps extends ComponentProps {
  /** Titulo que se muestra en componente */
  feedbackTitle: string;
  /** Objeto para el boton positivo */
  thumbsUpClick: FeedbackOptionsProps;
  /** Objeto para el boton negativo */
  thumbsDownClick: FeedbackOptionsProps;
}

const Feedback = (props: FeedbackProps) => {
  const { feedbackTitle, thumbsUpClick, thumbsDownClick, className } = props;
  const feedbackClass = classNames(
    "flex items-center text-monochrome-800 dark:bg-dark-700 dark:text-white",
    className
  );

  return (
    <div className={feedbackClass}>
      <h2 className="mr-4 text-xl font-bold">{feedbackTitle}</h2>
      <div className="flex gap-3 text-base">
        <Button onClick={thumbsUpClick.onClick}>
          <ThumbsIcon className="mr-2" />
          <p data-testid="positive-button">{thumbsUpClick.title}</p>
        </Button>
        <Button onClick={thumbsDownClick.onClick}>
          <ThumbsIcon className="mr-2 rotate-180" />
          <p data-testid="negative-button">{thumbsDownClick.title}</p>
        </Button>
      </div>
    </div>
  );
};

Feedback.defaultProps = {};

Feedback.displayName = "Feedback";

export default Feedback;
