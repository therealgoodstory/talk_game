import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarTasks = (props) => {
  const { name, style } = props;

  const state = useSelector((s) => s.sidebar.id);

  const [logoStyle, setLogoStyle] = useState("");
  const [textStyle, setTextStyle] = useState("");
  const [tasksStyle, setTasksStyle] = useState("");

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

  useLayoutEffect(() => (
    state === 1
      ? setTasksStyle("tasks-close")
      : setTasksStyle("tasks-open")
  ), [state]);

  const svg = (
    <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
      <path d="M4.5 0.5V9.5" stroke="#586371" strokeWidth="2" />
      <path d="M9 5L0 5" stroke="#586371" strokeWidth="2" />
    </svg>
  );

  return (
    <div>
      <Link to="/task" className={style}>
        <div className={logoStyle}>LOG</div>
        <span className={textStyle}>{name}</span>
      </Link>
      <Link
        role="button"
        to="/create"
        className={`${tasksStyle} button-border`}
      >
        {svg}
      </Link>
    </div>
  );
};

SidebarTasks.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default SidebarTasks;
