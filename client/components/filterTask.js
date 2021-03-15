import React from "react";
import PropTypes from "prop-types";

const FilterTask = ({ style }) => (
  <div className="page">
    <div className={style}>filter</div>
  </div>
);

FilterTask.propTypes = {
  style: PropTypes.string.isRequired,
};

export default FilterTask;
