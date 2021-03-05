import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Tasks = (props) => {
  const { name } = props;

  const state = useSelector((s) => s.sidebar.id)

  const [style, setStyle] = useState("sidebar__open")
  const [logoStyle, setLogoStyle] = useState("sidebar__open--logo")
  const [textStyle, setTextStyle] = useState("sidebar__open--name")
  const [tasksStyle, setTasksStyle] = useState("tasks-open")

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
  )

  return (
    <div className={style}>
      <div className={logoStyle}>LOG</div>
      <span className={textStyle}>{name}</span>
      <Link role="button" to="/create" className={`${tasksStyle} button-border`}>{svg}</Link>
    </div>
  );
};

Tasks.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
};

export default Tasks;
