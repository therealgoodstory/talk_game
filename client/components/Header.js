import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ link }) => {
  const location = useLocation();

  const legend = (
    <Link to={link} className="header_nav">
      BACK
    </Link>
  )
  return (
    <div className="header">
      <nav>
        {location.pathname === "/" ? '' : legend}
      </nav>
    </div>
  )
}

export default Header
