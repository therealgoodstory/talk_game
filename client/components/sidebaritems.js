import React from "react";
import PropTypes from "prop-types";

const SideBarItems = (props) => {
  const { name } = props;

  return (
    <div className="sidebar__item">
      <h5 className="sidebar__item--list">{name}</h5>
    </div>
  );
};

SideBarItems.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
};

export default SideBarItems;
