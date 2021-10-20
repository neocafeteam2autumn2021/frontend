import React from "react";
import PropTypes from "prop-types";

const TabPaneProfile = (props) => {
  return <div className="tab-pane">{props.childern}</div>;
};
TabPaneProfile.propTypes = {
  name: PropTypes.string
};

export default TabPaneProfile;