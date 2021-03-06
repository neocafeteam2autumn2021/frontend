import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuickOrders, getTakeawayOrders, releaseTakeawayOrders } from "../../redux/actions/orderActions";
import { ADD_QUICK_ORDER_RESET, GET_QUICK_ORDERS_RESET } from "../../redux/constants/orderConstants";
import LoadingComponent from "../loading/LoadingComponent";
import ModalAccept from "../modal/ModalAccept";
import ModalCloseAccount from "../modal/ModalCloseAccount";
import QuickOrderCard from "../quickOrderCard/QuickOrderCard";
import Toast from "../toast/Toast";
import "./quickOrder.css";

const QuickOrder = ({data}) => {

  const [list, setList] = useState([]);

  const dispatch = useDispatch();

  const [showAccept, setShowAccept] = useState(false);
  const onClickAccepted = () => dispatch(releaseTakeawayOrders());

  const [showCLoseAcc, setShowCLoseAcc] = useState(false);
  const onClickCLoseAcc = () => setShowCLoseAcc(!showCLoseAcc);

  const [accepted, setAccepted] = useState(false);

  const addQuickOrder = useSelector((state) => state.addQuickOrder);
  const { loadingAddQuickOrder, addQuickOrderData, errorAddQuickOrder } = addQuickOrder;
  const releaseTakeawayOrder = useSelector((state) => state.releaseTakeawayOrder);
  const { loadingReleaseOrders, releaseOrdersData } = releaseTakeawayOrder;

  const closeOrder = useSelector((state) => state.closeOrder);
  const { loadingCloseOrder, closeOrderData } = closeOrder;

  useEffect(() => {
    if(releaseOrdersData) {
      setShowAccept(true);
    }
    if(closeOrderData) {
      dispatch({ type: GET_QUICK_ORDERS_RESET });
      dispatch(getTakeawayOrders(6));
    }
    if(addQuickOrderData) {
      setList([...list, {id: 1, title: 'Добавлено успешно!', type: "success"}]);
      dispatch(getQuickOrders());
      dispatch({ type: ADD_QUICK_ORDER_RESET });
    } else if(errorAddQuickOrder && errorAddQuickOrder.toString().indexOf("401") === -1) {
      setList([...list, {id: 2, title: 'Ошибка', description: errorAddQuickOrder.toString(), type: "error"}]);
    }
  }, [dispatch, addQuickOrderData, closeOrderData, errorAddQuickOrder, releaseOrdersData, list]);

    
    return (
      <>
       {
       data ?
        <div
          className="quickOrderContainer"
        >
          {loadingReleaseOrders || loadingCloseOrder || loadingAddQuickOrder ? <LoadingComponent loading /> : null}
          <Toast toastList={list} />
          <ModalAccept setAccepted={setAccepted} showAccept={showAccept} setShowAccept={setShowAccept} />
          <ModalCloseAccount data={data} setShowCLoseAcc={setShowCLoseAcc} showCLoseAcc={showCLoseAcc} onClickCLoseAcc={onClickCLoseAcc} />
            <header className="quickOrder_header">
                <div className="quickOrder_title">
                    На вынос</div>
            </header>
            <main className="quickOrderContent">
              <div className="quickOrderContent_title">Заказ М-{data.id}</div>
                {data.orders.map((order) => {
                  return <QuickOrderCard data={order} key={order.id} />
                })}
            </main>
            <footer>
              <button className="quickOrderContentAddBtn quickOrderBtn" onClick={() => dispatch({ type: GET_QUICK_ORDERS_RESET })}>Добавить ещё</button>
              <div className="quickOrder_total">
                <div>Итого:</div>
                <div>{data.the_total_cost} с</div>
              </div>
              {accepted ? <button onClick={onClickCLoseAcc} className="quickOrderContentEndBtn quickOrderBtn">Закрыть счёт</button> :
              <button onClick={onClickAccepted} className="quickOrderContentEndBtn quickOrderBtn">Оформить заказ</button>}
            </footer>
        </div>
        : null
       }
      </>
    );
  };
  
  export default QuickOrder;