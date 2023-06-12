import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ItemMenuProps } from '../SidebarMenuTypes';
import SecondLevelItem from './SecondLevelItem';
import Chevron from './Chevron';

const FirstLevelItem = (props: ItemMenuProps) => {
  const {
    id,
    title,
    onClick,
    sections,
    selected,
    href,
    setItemSelectedId,
    itemSelectedId,
    isOneSection,
    setIsOneSectionState,
    setSectionSelectedState,
    isHeaderMobile,
    isLoggedUser,
    tooltipMessage
  } = props;
  const [open, setOpen] = useState(isOneSection);
  const [isSelectedSection, setIsSelectedSection] = useState(selected);

  const handleOnClick = () => {
    if (isHeaderMobile && sections && setIsOneSectionState && setSectionSelectedState) {
      setIsOneSectionState(true);
      setSectionSelectedState(id);
    }
    if (onClick) {
      onClick();
    }
    if (!sections && setItemSelectedId) {
      setItemSelectedId(id);
    }
    if (!isOneSection) {
      setOpen(!open);
    }
  };

  const isChildSelected = () => {
    if (sections) {
      return sections.some(section => {
        if (section.sections) {
          return section.sections.some(sec => sec.id === itemSelectedId);
        }
        return section.id === itemSelectedId;
      });
    }
    return false;
  };

  useEffect(() => {
    setIsSelectedSection(itemSelectedId === id);
  }, [itemSelectedId]);

  useEffect(() => {
    if (isHeaderMobile && !isOneSection) {
      setOpen(false);
    }
  });

  useEffect(() => {
    if (selected) {
      setIsSelectedSection(true);
    }
    if (!isOneSection) {
      setOpen(isChildSelected());
    }
  }, []);

  const itemClassName = classNames('flex-1 text-left whitespace-nowrap tracking-wide pl-2', {
    'text-sm': !sections,
    'text-sm lg:text-base font-medium cursor-pointer': sections || isOneSection,
    'hover:text-black dark:hover:text-white': !isOneSection && !isSelectedSection
  });

  const buttonClassName = classNames(
    'flex items-center py-2 w-full rounded-lg transition duration-75 text-left',
    {
      'text-primary-300 hover:text-primary-300': isSelectedSection,
      'text-monochrome-900 dark:text-monochrome-400 visited:text-monochrome-900 dark:visited:text-monochrome-400':
        !isSelectedSection && !open,
      'hover:text-black dark:hover:text-white cursor-pointer visited:text-monochrome-900 dark:visited:text-monochrome-400':
        !isOneSection && !isSelectedSection,
      'text-black dark:text-white': open && isChildSelected(),
      'cursor-default': isOneSection
    }
  );

  const content = (
    <>
      <span className={itemClassName}>
        {sections || isOneSection ? title.toUpperCase() : title}
      </span>
      {sections && !isOneSection && <Chevron open={open} isHeaderMobile={isHeaderMobile} />}
    </>
  );

  return (
    <li>
      {href && (!sections || !isHeaderMobile) ? (
        <Link href={href}>
          <a data-testid={id} href={href} className={buttonClassName} onClick={handleOnClick}>
            {content}
          </a>
        </Link>
      ) : (
        <button onClick={handleOnClick} data-testid={id} className={buttonClassName}>
          {content}
        </button>
      )}
      {sections && sections.length > 0 && (
        <ul
          className={classNames('py-2 space-y-2 w-full', {
            hidden: !open
          })}
        >
          {sections?.map(
            ({
              id: secondLevelId,
              title: secondLevelTitle,
              onClick: secondLevelOnClick,
              sections: secondLevelSections,
              href: secondLevelHref,
              isLoggedDocumentation
            }) => (
              <SecondLevelItem
                id={secondLevelId}
                key={secondLevelId}
                title={secondLevelTitle}
                onClick={secondLevelOnClick}
                href={secondLevelHref}
                sections={secondLevelSections}
                setItemSelectedId={setItemSelectedId}
                itemSelectedId={itemSelectedId}
                isOneSection={isOneSection}
                setIsOneSectionState={setIsOneSectionState}
                setSectionSelectedState={setSectionSelectedState}
                isHeaderMobile={isHeaderMobile}
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

FirstLevelItem.defaultProps = {
  className: '',
  sameWidth: false,
  setIsOneSectionState: undefined,
  setSectionSelectedState: undefined
};

export default FirstLevelItem;
