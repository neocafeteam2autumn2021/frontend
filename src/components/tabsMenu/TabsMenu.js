import React from "react";
import "./tabMenu.css";
import TabMenu from "./TabMenu";
import TabMenuPane from "./TabMenuPane";
import expresso from '../../assets/images/expresso.png';
import whiteTea from '../../assets/images/whiteTea.png';
import pepsi from '../../assets/images/pepsi.png';
import cinnamonBun from '../../assets/images/cinnamonBun.png';
import cheeseCake from '../../assets/images/cheeseCake.png';
import MenuCard from "../menuCards/MenuCard";

export default function TabsMenu() {
  let cinnamonBunTitle = "Булачка с корицей";
  return (
      <div className="tabsContainerMenu">
        <TabMenu>
          <TabMenuPane name="Кофе" key="1">
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
          </TabMenuPane>
          <TabMenuPane name="Чай" key="2">
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
            <MenuCard menuCardImage={whiteTea} menuCardTitle={"Белый чай"}/>
          </TabMenuPane>
          <TabMenuPane name="Напитки" key="3">
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
            <MenuCard menuCardImage={pepsi} menuCardTitle={"Pepsi"}/>
          </TabMenuPane>
          <TabMenuPane name="Выпечка" key="4">
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
          </TabMenuPane>
          <TabMenuPane name="Десерты" key="5">
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
            <MenuCard menuCardImage={cheeseCake} menuCardTitle={"Чизкейк"}/>
          </TabMenuPane>
        </TabMenu>
      </div>
  );
}