import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import NavbarItem from './NavbarItem/NavbarItem';

const navs = [
  { title: 'About Me', id: 'about' },
  { title: 'Skills', id: 'skill-set' },
  { title: 'Projects', id: 'projects' },
  { title: 'Contact', id: 'contact' }
];

const pointer = {
  cursor: 'pointer'
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const show = menu ? 'show' : '';

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link
        className="navbar-brand text-white"
        style={pointer}
        to="intro-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <FontAwesomeIcon icon={faHome} size="2x" />
      </Link>
      <button className="navbar-toggler" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={'collapse navbar-collapse ' + show}>
        <div className="navbar-nav ml-auto">
          {navs.map(navItem => (
            <NavbarItem
              key={navItem.id}
              navTitle={navItem.title}
              navTo={navItem.id}
              click={toggleMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
