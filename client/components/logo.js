import React, { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../public/logo.png";
import MiniLogo from "../public/123.png";
import { updateState } from "../redux/reducers/sidebar";

const Logo = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.sidebar.id)
  const [style, setStyle] = useState("header__menu--svg")
  const [logoStyle, setLogoStyle] = useState("header__menu--logo")
  useLayoutEffect(() => (
    state === 1
      ? setStyle("header__menu--mini-svg")
      : setStyle("header__menu--svg")
  ), [state]);
  useLayoutEffect(() => (
    state === 1
      ? setLogoStyle("header__menu--mini-logo")
      : setLogoStyle("header__menu--logo")
  ), [state]);
  const onClick = () => dispatch(updateState());
  const handleClick = (e) => (e.key === "m" ? dispatch(updateState()) : null);

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
      {state === -1 ? <img className={logoStyle} alt="logo" src={logo} /> : <img className={logoStyle} alt="logo" src={MiniLogo} />}
      <div role="button" tabIndex={0} onClick={onClick} onKeyDown={handleClick} className="button-border">
        {svg}
      </div>
    </div>
  );
};

export default Logo;
