import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LockIcon } from "../../../../componentesChoriceados/paradis-icons";
import { ItemMenuProps } from "../SidebarMenuTypes";
import ThirdLevelItem from "./ThirdLevelItem";
import Chevron from "./Chevron";
import Tooltip from "../../Tooltip";

const SecondLevelItem = (props: ItemMenuProps) => {
  const {
    id,
    title,
    onClick,
    sections,
    href,
    selected,
    setItemSelectedId,
    itemSelectedId,
    isOneSection,
    isHeaderMobile,
    isLoggedDocumentation: isLoggedDocumentationSecLevel,
    isLoggedUser,
    tooltipMessage,
  } = props;
  const [open, setOpen] = useState(false);

  const [isSelectedSection, setIsSelectedSection] = useState(selected);

  const showIcon = isLoggedDocumentationSecLevel && !isLoggedUser;

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    if (!sections && setItemSelectedId) {
      setItemSelectedId(id);
    }
    setOpen(!open);
  };

  const isChildSelected = () => {
    if (sections) {
      return sections.some((section) => section.id === itemSelectedId);
    }
    return false;
  };

  const isSectionSelected = () =>
    sections?.some((section) => section.id === itemSelectedId);
  const tooltipClassName = classNames(
    "absolute w-48 mx-auto transition-opacity -translate-x-1/2 opacity-0 -translate-y-11 group-hover:opacity-100 left-1/2"
  );
  useEffect(() => {
    setIsSelectedSection(itemSelectedId === id);
  }, [itemSelectedId]);

  useEffect(() => {
    setOpen(isChildSelected());
  }, []);

  const buttonClassName = classNames(
    "flex items-center py-2 w-full text-sm font-normal rounded-lg transition duration-75 group text-left",
    {
      "text-primary-300 hover:text-primary-300": isSelectedSection,
      "text-monochrome-700 dark:text-monochrome-400":
        !isSelectedSection && !open,
      "hover:text-black dark:hover:text-white visited:text-monochrome-700 dark:visited:text-monochrome-400":
        !isSelectedSection,
    }
  );

  const itemClassName = classNames("flex py-1 w-full rounded-lg", {
    "text-monochrome-500": showIcon,
    "text-primary-300": isSelectedSection,
    "dark:bg-monochrome-900 dark:text-white text-monochrome-700":
      isSectionSelected() && open,
    "bg-monochrome-200 text-monochrome-700":
      isSectionSelected() && open && isHeaderMobile,
    "pl-6": !isOneSection,
    "pl-2": isOneSection,
  });

  const content = (
    <>
      <span className={itemClassName}>{title}</span>
      {sections && sections.length > 0 && isOneSection && !isHeaderMobile && (
        <Chevron open={open} />
      )}
    </>
  );

  return (
    <li>
      {href ? (
        <Link href={href}>
          <a
            data-testid={id}
            href={href}
            className={buttonClassName}
            onClick={handleOnClick}
          >
            {content}
            {showIcon && (
              <>
                <div className="ml-1 mr-1">
                  <LockIcon size="xs" />
                </div>
                <div className="absolute w-48 mx-auto transition-opacity -translate-x-1/2 opacity-0 -translate-y-11 group-hover:opacity-100 left-1/2">
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
          className={buttonClassName}
          onClick={handleOnClick}
        >
          {content}
          {showIcon && (
            <>
              <div className="ml-1 mr-1">
                <LockIcon size="xs" />
              </div>
              <div className={tooltipClassName}>
                <Tooltip>{tooltipMessage}</Tooltip>
              </div>
            </>
          )}
        </button>
      )}
      {sections && sections.length > 0 && (
        <ul
          className={classNames("py-2 space-y-2", {
            hidden: !open && sections,
          })}
        >
          {sections?.map(
            ({
              id: thirdLevelId,
              title: thirdLevelTitle,
              onClick: thirdLevelOnClick,
              selected: thirdLevelSelected,
              href: thirdLevelHref,
              isLoggedDocumentation,
            }) => (
              <ThirdLevelItem
                id={thirdLevelId}
                key={thirdLevelId}
                href={thirdLevelHref}
                title={thirdLevelTitle}
                onClick={thirdLevelOnClick}
                selected={thirdLevelSelected}
                setItemSelectedId={setItemSelectedId}
                itemSelectedId={itemSelectedId}
                isOneSection={isOneSection}
                isLoggedDocumentation={isLoggedDocumentation}
                isLoggedUser={isLoggedUser}
                tooltipMessage={tooltipMessage}
              />
            )
          )}
        </ul>
      )}
    </li>
  );
};

SecondLevelItem.defaultProps = {
  className: "",
  sameWidth: false,
  setIsOneSectionState: undefined,
  setSectionSelectedState: undefined,
};

export default SecondLevelItem;
