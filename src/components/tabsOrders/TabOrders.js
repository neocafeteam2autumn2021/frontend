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
      const { name, index, sectionId, changeSection } = element.props;
      headers.push({ name, index, sectionId, changeSection });
      childCnt[index] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]["sectionId"]);
    setChildConent({ ...childCnt });
  }, [props, children]);

  const changeTab = (index, changeSection) => {
    changeSection(index);
  };

  return (
    <div className="tabsOrders">
        <ul className="tabHeaderOrders">
        {tabHeader.map(({name, index, changeSection}) => {
        return (
            <li
                onClick={() => changeTab(index, changeSection)}
                key={name}
                className={index === active ? "active" : ""}>
                {name === "Все" ? <div className="tabHeaderOrdersAll"></div> :
                  name === "Новый" ? <div className="tabHeaderOrdersNew"></div> :
                  name === "В процессе" ? <div className="tabHeaderOrdersProcess"></div> :
                  name === "Готово" ? <div className="tabHeaderOrdersReady"></div> :
                  name === "Отменено" ? <div className="tabHeaderOrdersCancel"></div> :
                  name === "Завершено" ? <div className="tabHeaderOrdersEnd"></div> : null}
                {name}
            </li>
            )})}
        </ul>
        <div className="tabContentOrders">
            {Object.keys(childContent).map((key) => {
            if (key === active.toString()) {
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