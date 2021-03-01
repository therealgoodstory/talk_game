import React from "react";
import logo from "../public/logo.png";

const svg = (
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    className="header-logo--svg "
  >
    <path d="M0 1H21" stroke="#C1C5CA" strokeWidth="2" />
    <path d="M0 8H21" stroke="#C1C5CA" strokeWidth="2" />
    <path d="M0 15H21" stroke="#C1C5CA" strokeWidth="2" />
  </svg>
);

const Logo = () => (
  <div className="header-logo">
    <img className="header-logo--size" alt="logo" src={logo} />
    {svg}
  </div>
);

export default Logo;
