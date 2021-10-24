import React, { useEffect, useState } from "react";
import TabMenuPane from "./TabMenuPane";

const TabMenu = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className="tabsMenu">
        <ul className="tabHeaderMenu">
        {tabHeader.map((item) => (
            <li
                onClick={() => changeTab(item)}
                key={item}
                className={item === active ? "active" : ""}>
                {item}
            </li>
            ))}
        </ul>
        <div className="tabContentMenu">
            {Object.keys(childContent).map((key) => {
            if (key === active) {
                return <div className="tabChildMenu" key={key}>{childContent[key]}</div>;
            } else {
                return null;
            }
            })}
        </div>
    </div>
  );
};

TabMenu.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabMenuPane) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabMenuPane`."
        );
      }
    });
    return error;
  }
};

export default TabMenu;