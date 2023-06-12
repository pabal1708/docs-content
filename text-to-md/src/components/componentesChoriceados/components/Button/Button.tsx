import React from "react";

import classNames from "classnames";

// import { SpinnerIcon } from "../../paradis-icons";
import {
  ButtonColor,
  ButtonColorMapType,
  ButtonProps,
  ButtonSize,
  ButtonSizeMapType,
} from "./buttonTypes";
import ButtonWrapper from "./ButtonWrapper";

export { ButtonColor, ButtonSize };

const colorDisabled = "text-black bg-monochrome-500 cursor-not-allowed";

const colorMap: ButtonColorMapType = {
  PRIMARY:
    "bg-primary-600 hover:bg-primary-400 active:bg-primary-700 text-white",
  SECONDARY: "bg-secondary-600 hover:bg-secondary-400 active:bg-secondary-700",
  TERTIARY:
    "bg-transparent border border-white hover:text-dark-700 active:text-dark-700 hover:bg-white active:bg-monochrome-150 active:border-monochrome-150",
  QUATERNARY: "hover:bg-dark-600 bg-dark-600 lg:bg-transparent",
  INVERTED:
    "bg-primary-50 hover:bg-primary-400 active:bg-primary-700 text-primary-600",
};

const sizeMap: ButtonSizeMapType = {
  SMALL: "h-10 px-5",
  MEDIUM: "h-10 lg:h-11 px-4 lg:px-5 lg:text-md",
  LARGE: "h-12 px-7",
};

const Button = ({
  text,
  size = ButtonSize.MEDIUM,
  color = ButtonColor.PRIMARY,
  children,
  className,
  onClick,
  href,
  target,
  loading,
  disabled,
  icon,
}: ButtonProps) => {
  const disabledMode = loading || disabled;
  const classNamesButton = classNames(
    "leading-none text-center rounded flex items-center justify-center whitespace-nowrap inline-flex",
    disabledMode ? colorDisabled : colorMap[color],
    sizeMap[size],
    className
  );
  const leftIconContent = loading ? <div /> : icon;

  return (
    <ButtonWrapper
      className={classNamesButton}
      href={href}
      onClick={onClick}
      target={target}
      loading={loading}
      disabled={disabled}
    >
      <div
        className={classNames(
          "overflow-hidden transition-all",
          leftIconContent != null ? "mr-1 -ml-1 w-5" : "w-0"
        )}
      >
        {leftIconContent}
      </div>
      {text || children}
    </ButtonWrapper>
  );
};

export default Button;
