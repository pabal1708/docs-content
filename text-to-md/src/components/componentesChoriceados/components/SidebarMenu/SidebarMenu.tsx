import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import FirstLevelItem from './components/FirstLevelItem';
import Chevron from './components/Chevron';
import { SidebarMenuProps } from './SidebarMenuTypes';

const SidebarMenu = (props: SidebarMenuProps) => {
  const {
    isOneSection,
    sections,
    sectionSelected,
    itemPreSelectedId,
    isHeaderMobile,
    className,
    isLoggedUser,
    tooltipMessage
  } = props;
  const [itemSelectedId, setItemSelectedId] = useState(itemPreSelectedId);
  const [isOneSectionState, setIsOneSectionState] = useState(isOneSection);
  const [sectionSelectedState, setSectionSelectedState] = useState(sectionSelected);
  const [sectionToShow, setSectionToShow] = useState(
    sections.find(section => section.id === sectionSelectedState)
  );
  const [sectionsList, setSectionList] = useState(
    isOneSectionState && sectionToShow ? [sectionToShow] : sections
  );

  const sidebarClassName = classNames('w-full', className);

  const backToSections = () => {
    setIsOneSectionState(false);
    setSectionSelectedState('');
    setSectionToShow(undefined);
    setSectionList(sections);
  };

  useEffect(() => {
    setItemSelectedId(itemPreSelectedId);
  }, [itemPreSelectedId]);

  useEffect(() => {
    setSectionList(isOneSectionState && sectionToShow ? [sectionToShow] : sections);
    setSectionToShow(sections.find(section => section.id === sectionSelectedState));
  }, [sections]);

  useEffect(() => {
    setSectionSelectedState(sectionSelected);
  }, [sectionSelected]);

  useEffect(() => {
    if (isOneSectionState) {
      setSectionToShow(sections.find(section => section.id === sectionSelectedState));
    }
  }, [isOneSectionState]);

  useEffect(() => {
    if (isOneSectionState && sectionToShow) {
      setSectionList([sectionToShow]);
    } else {
      setSectionList(sections);
    }
  }, [sectionToShow]);

  return (
    <aside className={sidebarClassName} aria-label="Sidebar">
      <div className="flex overflow-y-auto bg-white rounded dark:bg-dark-700 dark:text-monochrome-400">
        {isHeaderMobile && isOneSectionState && (
          <div>
            <button
              data-testid="arrow-back-sidebar"
              onClick={backToSections}
              className="mt-2 mr-2 cursor-pointer"
            >
              <Chevron isHeaderMobile={isHeaderMobile} backSection />
            </button>
          </div>
        )}
        <ul className="w-full space-y-2">
          {sectionsList.map(
            ({
              id: firstLevelId,
              title: firstLevelTitle,
              onClick: firstLevelOnClick,
              sections: firstLevelSections,
              selected: firstLevelSelected,
              href: firstLevelHref,
              isLoggedDocumentation
            }) => (
              <FirstLevelItem
                id={firstLevelId}
                key={firstLevelId}
                title={firstLevelTitle}
                href={firstLevelHref}
                onClick={firstLevelOnClick}
                sections={firstLevelSections}
                selected={firstLevelSelected}
                setItemSelectedId={setItemSelectedId}
                itemSelectedId={itemSelectedId}
                isOneSection={isOneSectionState}
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
      </div>
    </aside>
  );
};

SidebarMenu.defaultProps = {
  isHeaderMobile: false,
  isOneSection: false,
  sectionSelected: ''
};

SidebarMenu.displayName = 'SidebarMenu';

export default SidebarMenu;
