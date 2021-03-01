import React from "react";
import PropTypes from "prop-types";

const SmallSidebar = (props) => {
  const { name } = props;

  return (
    <div className="sidebar__item">
      <img alt="" scr="" />
    </div>
  );
};

SideBarItems.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
};

export default SmallSidebar;