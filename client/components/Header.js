import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Slider from './Slider';

const Header = ({ link }) => {
  const location = useLocation();

  const [openSlider, setOpenSlider] = useState(false)

  const legend = (
    <Link to={link} className="header_nav">
      BACK
    </Link>
  )

  const home = location.pathname === "/"

  const menuButton = (
    <button
      type="button"
      className={"header_menu-button" + (openSlider ? "--revert" : "")}
      onClick={() => setOpenSlider(!openSlider)}
    >
      <div className="header_burger-menu-item" />
      <div className="header_burger-menu-item" />
      <div className="header_burger-menu-item" />
    </button>
  )

  return (
    <div className="header">
      <nav className="header_nav-container">
        {home ? menuButton : legend}
      </nav>
      <h1 className="header_title">
        {((location.pathname).split('').filter(symbol => symbol !== "/").join('')).toUpperCase()}
      </h1>
      {home
        ? <section className="header_slider"> <Slider state={openSlider} closeClick={() => setOpenSlider(!openSlider)} /></section>
        : null
      }
    </div>
  )
}

export default Header
