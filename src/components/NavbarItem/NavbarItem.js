import React from 'react'
import { Link } from 'react-scroll';

import './NavbarItem.css'

const navbarItem = ({navTitle, navTo, click}) => (
	<Link
		className='styleNav'
    to={navTo}
    spy={true}
    smooth={true}
    offset={-60}
    duration={500}
    onClick={click}
  >
    {navTitle}
  </Link>
)

export default navbarItem