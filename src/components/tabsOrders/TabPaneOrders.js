import React from "react";
import PropTypes from "prop-types";

const TabPaneOrders = (props) => {
  return <div className="tab-pane-orders">{props.childern}</div>;
};
TabPaneOrders.propTypes = {
  name: PropTypes.string
};

export default TabPaneOrders;