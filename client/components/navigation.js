import React from "react";
import { Link } from 'react-router-dom'
import logo from '../public/logo.jpg'

const Navigation = () => (
  <Link to="/" className="nav">
    <img src={logo} alt="logo" className="nav__logo" />
    <h3 className="nav__text">на главную</h3>
  </Link>
)

export default Navigation;
