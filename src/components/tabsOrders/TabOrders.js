import React, { useEffect, useState } from "react";
import TabPaneOrders from "./TabPaneOrders";

const TabOrders = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name, type } = element.props;
      headers.push({name, type });
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]["name"]);
    setChildConent({ ...childCnt });
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className="tabsOrders">
        <ul className="tabHeaderOrders">
        {tabHeader.map(({name, type}) => (
            <li
                onClick={() => changeTab(name)}
                key={name}
                className={name === active ? "active" : ""}>
                {type === "all" ? <div className="tabHeaderOrdersAll"></div> :
                  type === "new" ? <div className="tabHeaderOrdersNew"></div> :
                  type === "process" ? <div className="tabHeaderOrdersProcess"></div> :
                  type === "ready" ? <div className="tabHeaderOrdersReady"></div> :
                  type === "cancel" ? <div className="tabHeaderOrdersCancel"></div> :
                  type === "end" ? <div className="tabHeaderOrdersEnd"></div> : null}
                {name}
            </li>
            ))}
        </ul>
        <div className="tabContentOrders">
            {Object.keys(childContent).map((key) => {
            if (key === active) {
                return <div className="tabChildOrders" key={key}>{childContent[key]}</div>;
            } else {
                return null;
            }
            })}
        </div>
    </div>
  );
};

TabOrders.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPaneOrders) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabPaneOrders`."
        );
      }
    });
    return error;
  }
};

export default TabOrders;