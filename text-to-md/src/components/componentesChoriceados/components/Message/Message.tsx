import React, { ReactNode } from "react";
import cn from "classnames";
import Icon from "./Icon";

interface MessageProps {
  /** Clase principal */
  className?: string;
  /** Wording dentro del Message */
  children: ReactNode;
  /** Tipo de Mensaje que necesitamos mostrar */
  type: "success" | "error" | "info" | "warning" | "note";
  /** Titulo del Message */
  title?: string;
}

type MessageMapType = {
  [key in "success" | "error" | "info" | "warning" | "note"]: string;
};

const typeMap: MessageMapType = {
  success: "bg-secondary-100 border-secondary-500",
  error: "bg-error-10 border-error",
  note: "bg-monochrome-100 border-monochrome-600",
  warning: "bg-warning-10 border-warning",
  info: "bg-info-10 border-info",
};

const Message = ({ title, className, children, type }: MessageProps) => {
  const messageClasses = cn(
    "rounded-md px-12px flex items-start w-full pt-12px pb-16px border-solid border text-monochrome-700 font-normal",
    typeMap[type]
  );

  return (
    <div className={cn(className, messageClasses)}>
      <div className="flex mt-2px">
        <Icon iconType={type} />
      </div>
      <div className="flex flex-col ml-12px">
        {title && (
          <div className="font-medium text-monochrome-700">{title}</div>
        )}
        <div className="flex items-start">{children}</div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  className: "",
  title: "",
};

export type { MessageProps };
export default Message;
