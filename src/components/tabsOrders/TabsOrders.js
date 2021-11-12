import React from "react";
import "./tabOrders.css";
import TabOrders from "./TabOrders";
import TabPaneOrders from "./TabPaneOrders";
import OrderCard from "../orderCard/OrderCard";

export default function TabsOrders() {
  return (
      <div className="tabsContainerOrders">
        <TabOrders>
          <TabPaneOrders name="Все" key="1" type="all">
            <OrderCard orderCardTitle={"Экспрессо"} type="n"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="p"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="r"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="c"/>
          </TabPaneOrders>
          <TabPaneOrders name="Новый" key="2" type="new">
            <OrderCard orderCardTitle={"Экспрессо"} type="n"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="n"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="n"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="n"/>
          </TabPaneOrders>
          <TabPaneOrders name="В процессе" key="3" type="process">
            <OrderCard orderCardTitle={"Экспрессо"} type="p"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="p"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="p"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="p"/>
          </TabPaneOrders>
          <TabPaneOrders name="Готово" key="4" type="ready">
            <OrderCard orderCardTitle={"Экспрессо"} type="r"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="r"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="r"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="r"/>
          </TabPaneOrders>
          <TabPaneOrders name="Отменено" key="5" type="cancel">
            <OrderCard orderCardTitle={"Экспрессо"} type="c"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="c"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="c"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="c"/>
          </TabPaneOrders>
          <TabPaneOrders name="Завершено" key="6" type="end">
            <OrderCard orderCardTitle={"Экспрессо"} type="e"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="e"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="e"/>
            <OrderCard orderCardTitle={"Экспрессо"} type="e"/>
          </TabPaneOrders>
        </TabOrders>
      </div>
  );
}