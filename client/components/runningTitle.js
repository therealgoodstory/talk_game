import React from 'react'
import PropTypes from "prop-types";

const RunningTitle = ({style}) => <div className="page"><div className={style}>RunningTitle</div></div>

Task.propTypes = {
  style: PropTypes.string.isRequired,
};

export default RunningTitle

