import React from "react";
import PropTypes from "prop-types";

const TabMenuPane = (props) => {
  return <div className="tab-pane-menu">{props.childern}</div>;
};
TabMenuPane.propTypes = {
  name: PropTypes.string
};

export default TabMenuPane;