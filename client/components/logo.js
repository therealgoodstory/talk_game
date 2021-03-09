import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import logo from "../public/logo.png";
import { updateState } from "../redux/reducers/sidebar";

const Logo = () => {
  const state = useSelector((s) => s.sidebar.id)
  const dispatch = useDispatch();

  const [style, setStyle] = useState("header__menu--svg")
  const [logoStyle, setLogoStyle] = useState("header__menu--logo")

  useEffect(() => (
    state === 1
      ? setStyle("header__menu--mini-svg")
      : setStyle("header__menu--svg")
  ), [state]);

  useEffect(() => (
    state === 1
      ? setLogoStyle("header__menu--mini-logo")
      : setLogoStyle("header__menu--logo")
  ), [state]);

  const onClick = () => dispatch(updateState());
  const handleClick = (e) => console.log(e.key)

  const svg = (
    <svg
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      className={style}
    >
      <path d="M0 1H21" stroke="#C1C5CA" strokeWidth="2" />
      <path d="M0 8H21" stroke="#C1C5CA" strokeWidth="2" />
      <path d="M0 15H21" stroke="#C1C5CA" strokeWidth="2" />
    </svg>
  );
  return (
    <div className="header__menu between">
      <Link to="/" className={logoStyle}>
        <img alt="logo" src={logo} width="145px" height="33px" />
      </Link>
      <div role="button" tabIndex={0} onClick={onClick} onKeyDown={handleClick} className="button-border">
        {svg}
      </div>
    </div>
  );
};

export default Logo;
