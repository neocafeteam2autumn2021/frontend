import React, { useState } from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import ModalAccept from "../modal/ModalAccept";
import ModalCloseAccount from "../modal/ModalCloseAccount";
import QuickOrderCard from "../quickOrderCard/QuickOrderCard";
import "./quickOrder.css";

const QuickOrder = ({showQuickOrder, setShowQuickOrder}) => {
  const closeQuickOrder = () => setShowQuickOrder(false);

  const [showAccept, setShowAccepted] = useState(false);
  const onClickAccepted = () => setShowAccepted(!showAccept);

  const [showCLoseAcc, setShowCLoseAcc] = useState(false);
  const onClickCLoseAcc = () => setShowCLoseAcc(!showCLoseAcc);

  const [accepted, setAccepted] = useState(false);

    
    return (
      <>
       {
       showQuickOrder ?
        <div
          className="quickOrderContainer"
        >
          <ModalAccept setAccepted={setAccepted} showAccept={showAccept} onClickAccepted={onClickAccepted} />
          <ModalCloseAccount setShowCLoseAcc={setShowCLoseAcc} showCLoseAcc={showCLoseAcc} onClickCLoseAcc={onClickCLoseAcc} />
            <header className="quickOrder_header">
                <div className="quickOrder_title">
                    На вынос</div>
                <button className="close" onClick={closeQuickOrder}>
                    <img src={cancelModal} alt="cancelModal" />
                </button>
            </header>
            <main className="quickOrderContent">
              <div className="quickOrderContent_title">Заказ М-56</div>
                <QuickOrderCard options={['M 350 мл', 'Карамельный сироп']} />
                <QuickOrderCard />
                <QuickOrderCard />
                <QuickOrderCard />
                <QuickOrderCard />
            </main>
            <footer>
              <button className="quickOrderContentAddBtn quickOrderBtn">Добавить ещё</button>
              <div className="quickOrder_total">
                <div>Итого:</div>
                <div>780 с</div>
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