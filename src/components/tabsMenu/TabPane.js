import React from "react";
import PropTypes from "prop-types";

const TabPane = (props) => {
  return <div className="tab-pane-menu">{props.childern}</div>;
};
TabPane.propTypes = {
  name: PropTypes.string
};

export default TabPane;