import React from "react";
import "./tabOrders.css";
import TabOrders from "./TabOrders";
import TabPaneOrders from "./TabPaneOrders";
import OrderCard from "../orderCard/OrderCard";

const sections = ["Все", "Новый", "В процессе", "Готово", "Отменено", "Завершено"];

export default function TabsOrders({changeSection, sectionId, type, data}) {
  return (
      <div className="tabsContainerOrders">
        <TabOrders>
          {sections.map((section, index) => {
            return <TabPaneOrders name={section} index={index+1} sectionId={sectionId} changeSection={changeSection} key={section}>
              {data.map((order) => {
                return <OrderCard data={order} type={type} key={order.id} />
              })}
            </TabPaneOrders>
          })}
        </TabOrders>
      </div>
  );
}