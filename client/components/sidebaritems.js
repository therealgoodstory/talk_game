import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'

const SideBarItems = (props) => {
  const { name, style } = props;

  const state = useSelector((s) => s.sidebar.id)

  const [logoStyle, setLogoStyle] = useState("sidebar__open--logo")
  const [textStyle, setTextStyle] = useState("sidebar__open--name")

  useEffect(() => (
    state === 1
      ? setLogoStyle("sidebar__close--logo")
      : setLogoStyle("sidebar__open--logo")
  ), [state]);

  useEffect(() => (
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
