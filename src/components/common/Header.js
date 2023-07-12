import React, { useState } from 'react';
import Logo from '../../assets/public/logo.png';
import ForwardIcon from '../../assets/public/header/ion_chevron-forward-sharp.svg';
import CloseIcon from '../../assets/public/header/ion_close-sharp.svg';
import MenuSharp from '../../assets/public/header/ion_menu-sharp.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuIcon, setIsMenuIcon] = useState(MenuSharp);

  const menuItems = [
    { path: '#1', name: 'Show All Tyres', title: 'Typres' },
    {
      path: '#2',
      name: 'Find a Dealer',
      title: 'Dealer section',
    },
    {
      path: '#3',
      name: 'Guides & Videos',
      title: 'Guides and Videos section',
    },
    {
      path: '#4',
      name: 'Go with',
      title: 'Go with',
    },
    {
      path: '#5',
      name: 'Service & Help',
      title: 'Service and Help page',
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMenuIcon(CloseIcon);
    } else {
      setIsMenuIcon(MenuSharp);
    }
  };

  return (
    <nav className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={Logo} alt="Alca Digital Logo" />
      </div>
      <ul className="header__nav-desktop">
        {menuItems.map((item, idx) => {
          return (
            <li key={idx} className="header__link">
              <a className="header__link-name" href={item.path} title={item.title}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="header__mobile-menu">
        <img className="header__mobile-icon" onClick={toggleMenu} src={isMenuIcon} alt="Navigation menu item" />
      </div>
      {isOpen && (
        <ul className="header__nav-mobile">
          {menuItems.map((item, idx) => {
            return (
              <li key={idx} className="header__link-mobile">
                <a className="header__link-name-mobile" href={item.path} title={item.title}>
                  {item.name}
                  <img className="header__link-icon" src={ForwardIcon} alt={item.title} />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
