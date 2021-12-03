import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cancelModal from '../../assets/images/cancelModal.png';
import { updatePlaceOrders, updateTakeawayOrders } from "../../redux/actions/orderActions";
import { refreshToken } from "../../redux/actions/userActions";
import { UPDATE_PLACE_ORDERS_RESET, UPDATE_TAKEAWAY_ORDERS_RESET } from "../../redux/constants/orderConstants";
import LoadingComponent from "../loading/LoadingComponent";
import Toast from "../toast/Toast";
import "./orderCard.css";

export default function OrderCard({ data, type }) {

  const dispatch = useDispatch();

  const updatePlaceOrder = useSelector((state) => state.updatePlaceOrder);
  const { loadingUpdatePlaceOrder, errorUpdatePlaceOrder } = updatePlaceOrder;
  const updateTakeawayOrder = useSelector((state) => state.updateTakeawayOrder);
  const { loadingUpdateTakeawayOrder, errorUpdateTakeawayOrder } = updateTakeawayOrder;

  useEffect(() => {
    if((errorUpdatePlaceOrder && errorUpdatePlaceOrder.toString().indexOf("401") !== -1) || (errorUpdateTakeawayOrder && errorUpdateTakeawayOrder.toString().indexOf("401") !== -1)) {
      const { refresh } = JSON.parse(localStorage.getItem('userInfo'));
      dispatch(refreshToken(refresh));
    } else if(errorUpdatePlaceOrder) {
      setTimeout(function(){ dispatch({ type: UPDATE_PLACE_ORDERS_RESET}); }, 3000);
    } else if(errorUpdateTakeawayOrder) {
      setTimeout(function(){ dispatch({ type: UPDATE_TAKEAWAY_ORDERS_RESET}); }, 3000);
    }
  }, [dispatch, errorUpdatePlaceOrder, errorUpdateTakeawayOrder]);

  const onClickButton = (status) => {
    if(type === "placeOrder" && status !== 6) {
      dispatch(updatePlaceOrders(data.id, data.status, status ));
    } else if(type === "takeawayOrder") {
      dispatch(updateTakeawayOrders(data.id, data.status, status ));
    }
  }

  // const onClickMore = () => alert("More");
  return (
      <div className="orderCard">
        {loadingUpdatePlaceOrder || loadingUpdateTakeawayOrder ? <LoadingComponent loading /> : null}
        {errorUpdatePlaceOrder ? <Toast toastList={[{id: 1, title: 'Ошибка', description: errorUpdatePlaceOrder.toString(), type: "error"}]} /> :
        errorUpdateTakeawayOrder ? <Toast toastList={[{id: 1, title: 'Ошибка', description: errorUpdateTakeawayOrder.toString(), type: "error"}]} /> : null}
        <div className={
          `orderCardHeader
          ${data.status === 2 ? "newOrderCardHeader" :
            data.status === 3 ? "processOrderCardHeader" :
            data.status === 4 ? "readyOrderCardHeader" :
            data.status === 5 ? "cancelRrderCardHeader" :
            data.status === 6 ? "endOrderCardHeader" : null}`}>
          <div className="orderCardNumber">М- {data.id}</div>
          <div className="orderCardForename">{data.client && data.client.user.name}</div>
          {data.status === 2 && type === "takeawayOrder" ? <button className="close" onClick={() => onClickButton(5)}>
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
          {data.status === 2 ? <button className="orderFooterButtonN" onClick={() => onClickButton(3)}>Принять</button> :
            data.status === 3 ? <button className="orderFooterButtonP" onClick={() => onClickButton(4)}>Завершить</button> :
            data.status === 4 ? <button className="orderFooterButtonR" onClick={() => onClickButton(6)}>Готово</button> :
            data.status === 5 ? <button className="orderFooterButtonC">Заказ отменён</button> :
            data.status === 6 ? <button className="orderFooterButtonE">Заказ закрыт</button> : null}
        </div>
      </div>
  );
}