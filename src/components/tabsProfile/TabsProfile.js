import React from "react";
import "./tabProfile.css";
import TabProfile from "./TabProfile";
import TabPaneProfile from "./TabPaneProfile";
import InputProfile from "./InputProfile";
import Schedule from "./Schedule";

export default function TabsProfile() {
  return (
        <TabProfile>
          <TabPaneProfile name="Личные данные" key="1">
            <InputProfile />
          </TabPaneProfile>
          <TabPaneProfile name="График работы" key="2">
            <Schedule />
          </TabPaneProfile>
        </TabProfile>
  );
}