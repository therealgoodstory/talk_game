import React from 'react'
import PropTypes from "prop-types";

const Task = ({style}) => <div className="page"><div className={style}>Task</div></div>

Task.propTypes = {
  style: PropTypes.string.isRequired,
};

export default Task
