import React from "react";
import { Link } from 'react-router-dom'

const Navigation = () => (
  <Link to="/" className="nav">
    <img src="https://cq-esports.com/storage/uploads/images/1079876/1613738343502.png" alt="logo" className="nav__logo" />
    <h3 className="nav__text">на главную</h3>
  </Link>
)

export default Navigation;
