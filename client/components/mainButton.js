import React from "react";
import PropTypes from "prop-types";

const MainButton = (props) => {
  const { onClick } = props;
  return (
    <button type="button" className="main-button" onClick={onClick}>
      Загрузить
    </button>
  );
};

MainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MainButton;
