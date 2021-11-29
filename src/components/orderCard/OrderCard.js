import React from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import "./orderCard.css";

export default function OrderCard({ data }) {

  const close = () => alert("Closed");
  const click = () => alert("Ok");
  // const onClickMore = () => alert("More");
  return (
      <div className="orderCard">
        <div className={
          `orderCardHeader
          ${data.status === 2 ? "newOrderCardHeader" :
            data.status === 3 ? "processOrderCardHeader" :
            data.status === "r" ? "readyOrderCardHeader" :
            data.status === "c" ? "cancelRrderCardHeader" :
            data.status === "e" ? "endOrderCardHeader" : null}`}>
          <div className="orderCardNumber">М- {data.id}</div>
          <div className="orderCardForename">{data.client.user.name}</div>
          {data.status === 2 ? <button className="close" onClick={() => close()}>
            <img src={cancelModal} alt="cancelModal" />
          </button> : null}
        </div>
        <div className="orderCardBody">
          <div className="orderCardBodyHeader">
            <div>Стол № {data.table}</div>
            <div>{`${new Date(data.creation_date).getHours()}:${new Date(data.creation_date).getMinutes()}`}</div>
          </div>
          {data.orders.map((order) => {
            return <div className="orderCardOrder" key={order.id}>
              <div className="cardOrderHeader">
                <div className="cardOrderName">{order.food.name}</div>
                <div className="cardOrderPieces">X{order.quantity}</div>
              </div>
              <ul className="cardOrderOptions">
                {/* <li>M 350 мл</li> */}
                {/* <li>Карамельный сироп</li> */}
              </ul>
            </div>
          })}
          {/* <div className="orderCardEtc" onClick={onClickMore}>Ещё 3</div> */}
        </div>
        <div className="orderCardFooter">
          {data.status === 2 ? <button className="orderFooterButtonN" onClick={click}>Принять</button> :
            data.status === 3 ? <button className="orderFooterButtonP" onClick={click}>Завершить</button> :
            data.status === "r" ? <button className="orderFooterButtonR" onClick={click}>Готово</button> :
            data.status === "c" ? <button className="orderFooterButtonC" onClick={click}>Заказ отменён</button> :
            data.status === "e" ? <button className="orderFooterButtonE" onClick={click}>Заказ закрыт</button> : null}
        </div>
      </div>
  );
}