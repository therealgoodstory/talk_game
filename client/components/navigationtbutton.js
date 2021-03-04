import React from "react";
import PropTypes from "prop-types";

const NavigationButton = (props) => {
  const { name } = props
  return <span>{name}</span>
}

NavigationButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavigationButton;
