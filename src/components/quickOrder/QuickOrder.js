import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuickOrders } from "../../redux/actions/orderActions";
import { ADD_QUICK_ORDER_RESET } from "../../redux/constants/orderConstants";
import LoadingComponent from "../loading/LoadingComponent";
import ModalAccept from "../modal/ModalAccept";
import ModalCloseAccount from "../modal/ModalCloseAccount";
import QuickOrderCard from "../quickOrderCard/QuickOrderCard";
import Toast from "../toast/Toast";
import "./quickOrder.css";

const QuickOrder = ({data}) => {

  const [list, setList] = useState([]);

  const dispatch = useDispatch();

  const [showAccept, setShowAccepted] = useState(false);
  const onClickAccepted = () => setShowAccepted(!showAccept);

  const [showCLoseAcc, setShowCLoseAcc] = useState(false);
  const onClickCLoseAcc = () => setShowCLoseAcc(!showCLoseAcc);

  const [accepted, setAccepted] = useState(false);

  const addQuickOrder = useSelector((state) => state.addQuickOrder);
  const { loadingAddQuickOrder, addQuickOrderData, errorAddQuickOrder } = addQuickOrder;

  useEffect(() => {
    if(addQuickOrderData) {
      setList([...list, {id: 1, title: 'Добавлено успешно!', type: "success"}]);
      dispatch(getQuickOrders());
      dispatch({ type: ADD_QUICK_ORDER_RESET });
    } else if(errorAddQuickOrder) {
      setList([...list, {id: 2, title: 'Ошибка', description: errorAddQuickOrder, type: "error"}]);
    }
  }, [dispatch, addQuickOrderData, errorAddQuickOrder, list]);

    
    return (
      <>
       {
       data ?
        <div
          className="quickOrderContainer"
        >
          {loadingAddQuickOrder ? <LoadingComponent loading /> : null}
          <Toast toastList={list} />
          <ModalAccept setAccepted={setAccepted} showAccept={showAccept} onClickAccepted={onClickAccepted} />
          <ModalCloseAccount setShowCLoseAcc={setShowCLoseAcc} showCLoseAcc={showCLoseAcc} onClickCLoseAcc={onClickCLoseAcc} />
            <header className="quickOrder_header">
                <div className="quickOrder_title">
                    На вынос</div>
            </header>
            <main className="quickOrderContent">
              <div className="quickOrderContent_title">Заказ М-{data.id}</div>
                {data.orders.map((order) => {
                  return <QuickOrderCard data={order} id={order.id} />
                })}
            </main>
            <footer>
              <button className="quickOrderContentAddBtn quickOrderBtn">Добавить ещё</button>
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