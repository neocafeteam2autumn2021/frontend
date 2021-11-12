import React from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import "./orderCard.css";

export default function OrderCard({orderCardTitle, type}) {

  const close = () => alert("Closed");
  const click = () => alert("Ok");
  const onClickMore = () => alert("More");
  return (
      <div className="orderCard">
        <div className={
          `orderCardHeader
          ${type === "n" ? "newOrderCardHeader" :
            type === "p" ? "processOrderCardHeader" :
            type === "r" ? "readyOrderCardHeader" :
            type === "c" ? "cancelRrderCardHeader" :
            type === "e" ? "endOrderCardHeader" : null}`}>
          <div className="orderCardNumber">М- 47</div>
          <div className="orderCardForename">Алибек</div>
          <button className="close" onClick={() => close()}>
            <img src={cancelModal} alt="cancelModal" />
          </button>
        </div>
        <div className="orderCardBody">
          <div className="orderCardTime">13:56</div>
          <div className="orderCardOrder">
            <div className="cardOrderHeader">
              <div className="cardOrderName">Капучино</div>
              <div className="cardOrderPieces">X1</div>
            </div>
            <ul className="cardOrderOptions">
              <li>M 350 мл</li>
              <li>Карамельный сироп</li>
            </ul>
          </div>
          <div className="orderCardOrder">
            <div className="cardOrderHeader">
              <div className="cardOrderName">Капучино</div>
              <div className="cardOrderPieces">X1</div>
            </div>
            <ul className="cardOrderOptions">
              <li>M 350 мл</li>
              <li>Карамельный сироп</li>
            </ul>
          </div>
          <div className="orderCardOrder">
            <div className="cardOrderHeader">
              <div className="cardOrderName">Капучино</div>
              <div className="cardOrderPieces">X1</div>
            </div>
            <ul className="cardOrderOptions">
              <li>M 350 мл</li>
              <li>Карамельный сироп</li>
            </ul>
          </div>
          <div className="orderCardEtc" onClick={onClickMore}>Ещё 3</div>
        </div>
        <div className="orderCardFooter">
          {type === "n" ? <button className="orderFooterButtonN" onClick={click}>Принять</button> :
            type === "p" ? <button className="orderFooterButtonP" onClick={click}>Завершить</button> :
            type === "r" ? <button className="orderFooterButtonR" onClick={click}>Готово</button> :
            type === "c" ? <button className="orderFooterButtonC" onClick={click}>Заказ отменён</button> :
            type === "e" ? <button className="orderFooterButtonE" onClick={click}>Заказ закрыт</button> : null}
        </div>
      </div>
  );
}