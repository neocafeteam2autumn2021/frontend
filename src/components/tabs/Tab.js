import React, { useEffect, useState } from "react";
import TabPaneProfile from "./TabPane";

const Tab = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name, sectionName, setSectionName } = element.props;
      headers.push({name, sectionName, setSectionName});
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0].sectionName);
    setChildConent({ ...childCnt });
  }, [props, children]);

  const changeTab = (name, setSectionName) => {
    setSectionName(name);
  };

  return (
    <div className="tabs">
        <ul className="tab-header">
        {tabHeader.map(({name, setSectionName}) => (
            <li
                onClick={() => changeTab(name, setSectionName)}
                key={name}
                className={name === active ? "active" : ""}>
                {name}
            </li>
            ))}
        </ul>
        <div className="tabContent">
            {Object.keys(childContent).map((key) => {
            if (key === active) {
                return <div className="tabChild" key={key}>{childContent[key]}</div>;
            } else {
                return null;
            }
            })}
        </div>
    </div>
  );
};

Tab.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPaneProfile) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabPane`."
        );
      }
    });
    return error;
  }
};

export default Tab;