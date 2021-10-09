import React from "react";
import "./tab.css";
import Tab from "./tab";
import TabPane from "./tab-pane";
import expresso from '../../assets/images/expresso.png';
import whiteTea from '../../assets/images/whiteTea.png';
import pepsi from '../../assets/images/pepsi.png';
import cinnamonBun from '../../assets/images/cinnamonBun.png';
import cheeseCake from '../../assets/images/cheeseCake.png';
import MenuCard from "../menuCards/MenuCard";

export default function Tabs() {
  let cinnamonBunTitle = "Булачка с корицей";
  return (
      <div className="tabsContainer">
        <Tab>
          <TabPane name="Кофе" key="1">
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
            <MenuCard menuCardImage={expresso} menuCardTitle={"Экспрессо"}/>
          </TabPane>
          <TabPane name="Чай" key="2">
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
          </TabPane>
          <TabPane name="Напитки" key="3">
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
          </TabPane>
          <TabPane name="Выпечка" key="4">
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
            <MenuCard menuCardImage={cinnamonBun} menuCardTitle={cinnamonBunTitle}/>
          </TabPane>
          <TabPane name="Десерты" key="5">
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
          </TabPane>
        </Tab>
      </div>
  );
}