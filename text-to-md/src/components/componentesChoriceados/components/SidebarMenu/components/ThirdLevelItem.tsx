import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LockIcon } from "../../../../componentesChoriceados/paradis-icons";
import { ItemMenuProps } from "../SidebarMenuTypes";
import Tooltip from "../../Tooltip";

const ThirdLevelItem = (props: ItemMenuProps) => {
  const {
    id,
    title,
    onClick,
    setItemSelectedId,
    itemSelectedId,
    href,
    isOneSection,
    isLoggedDocumentation,
    isLoggedUser,
    tooltipMessage,
  } = props;

  const [isSelectedSection, setIsSelectedSection] = useState(false);
  const showIcon = isLoggedDocumentation && !isLoggedUser;
  const tooltipClassName = classNames(
    "absolute w-48 mx-auto transition-opacity -translate-x-1/2 opacity-0 -translate-y-11 group-hover:opacity-100 left-1/2"
  );

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    if (setItemSelectedId) {
      setItemSelectedId(id);
    }
  };

  useEffect(() => {
    setIsSelectedSection(itemSelectedId === id);
  }, [itemSelectedId]);

  const itemClassName = classNames(
    "flex items-center p-1 w-full text-sm font-normal rounded-lg transition duration-75 group text-left",
    {
      "text-monochrome-500": showIcon,
      "text-primary-300 hover:text-primary-300": isSelectedSection && !showIcon,
      "pl-4": isOneSection,
      "pl-11": !isOneSection,
      "text-monochrome-900 dark:text-monochrome-400 hover:text-black dark:hover:text-white visited:text-monochrome-900 dark:visited:text-monochrome-400":
        !isSelectedSection && !showIcon,
    }
  );

  return (
    <li>
      {href ? (
        <Link href={href}>
          <a
            data-testid={id}
            href={href}
            className={itemClassName}
            onClick={() => handleOnClick()}
          >
            {title}
            {showIcon && (
              <>
                <div className="ml-auto">
                  <LockIcon size="xs" />
                </div>
                <div className={tooltipClassName}>
                  <Tooltip>{tooltipMessage}</Tooltip>
                </div>
              </>
            )}
          </a>
        </Link>
      ) : (
        <button
          data-testid={id}
          type="button"
          className={itemClassName}
          onClick={handleOnClick}
        >
          {title}
          {showIcon && (
            <>
              <div className="ml-auto">
                <LockIcon size="xs" />
              </div>
              <div className={tooltipClassName}>
                <Tooltip>{tooltipMessage}</Tooltip>
              </div>
            </>
          )}
        </button>
      )}
    </li>
  );
};

ThirdLevelItem.defaultProps = {
  className: "",
  sameWidth: false,
};

export default ThirdLevelItem;
