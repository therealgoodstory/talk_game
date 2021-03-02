import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'

const SideBarItems = (props) => {
  const { name } = props;

  const state = useSelector((s) => s.sidebar.id)

  const [style, setStyle] = useState("sidebar__open")
  const [logoStyle, setLogoStyle] = useState("sidebar__open--logo")
  const [textStyle, setTextStyle] = useState("sidebar__open--name")

  useLayoutEffect(() => (
    state === 1
      ? setStyle("sidebar__close")
      : setStyle("sidebar__open")
  ), [state]);

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
      <h5 className={textStyle}>{name}</h5>
    </div>
  );
};

SideBarItems.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
};

export default SideBarItems;
