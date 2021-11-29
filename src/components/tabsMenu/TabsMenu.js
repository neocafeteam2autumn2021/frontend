import React from "react";
import "./tabMenu.css";
import TabMenu from "./TabMenu";
import TabMenuPane from "./TabMenuPane";
import MenuCard from "../menuCards/MenuCard";

export default function TabsMenu({ menuCategories, menuFoods }) {
  return (
      <div className="tabsContainerMenu">
        <TabMenu>
          {menuCategories && menuFoods && menuCategories.map((category) => {
            return <TabMenuPane name={category.name} key={category.id}>
              {menuFoods.map((categories) => {
                const { data } = categories;
                return data.map((item) => category.id === item.category.id ? <MenuCard data={item} key={item.id}/> : null);
                })}
            </TabMenuPane>
          })}
        </TabMenu>
      </div>
  );
}