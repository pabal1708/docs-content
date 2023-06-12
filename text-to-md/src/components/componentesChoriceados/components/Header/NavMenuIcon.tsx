import React from 'react';

const CloseMenu = () => (
  <svg data-testid="nav-menu-close" className='text-black dark:text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="currentColor"/>
  </svg>
);

const HamburguerMenu = () => (
  <svg className='text-black dark:text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="1.5" fill="currentColor"/>
    <rect x="3" y="11.25" width="18" height="1.5" fill="currentColor"/>
    <rect x="3" y="16.5" width="18" height="1.5" fill="currentColor"/>
  </svg>
);



type IconProps = {
  isOpen: boolean
  }


const NavMenuIcon = ({ isOpen, ...props }: IconProps ) => {
  const Icon = isOpen ? CloseMenu : HamburguerMenu;

  return <Icon {...props}/>;
};


export default NavMenuIcon;
