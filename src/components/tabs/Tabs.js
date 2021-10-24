import React from "react";
import "./tab.css";
import Tab from "./Tab";
import TabPane from "./TabPane";

export default function Tabs({components, names}) {
  return (
        <Tab>
          <TabPane name={names[0]} key="1">
            {components[0]}
          </TabPane>
          <TabPane name={names[1]} key="2">
            {components[1]}
          </TabPane>
        </Tab>
  );
}