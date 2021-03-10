import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'

const SideBarItems = (props) => {
  const { name, style } = props;

  const state = useSelector((s) => s.sidebar.id)

  const [logoStyle, setLogoStyle] = useState("")
  const [textStyle, setTextStyle] = useState("")

  useLayoutEffect(() => (
    state === 1
      ? setLogoStyle("sidebar__close--logo")
      : setLogoStyle("sidebar__open--logo")
  ), [state]);

  useLayoutEffect(() => (
    state === 1
      ? setTextStyle("sidebar__close--name")
      : setTextStyle("sidebar__open--name")
  ), [state]);

  return (
    <div className={style}>
      <div className={logoStyle}>LOG</div>
      <span className={textStyle}>{name}</span>
    </div>
  );
};

SideBarItems.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
  style: PropTypes.string.isRequired,
};

export default SideBarItems;
