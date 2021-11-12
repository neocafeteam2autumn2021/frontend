import React, { useState } from "react";
import notifCardTrash from '../../assets/images/notifCardTrash.png';
import "./notifCard.css";

export default function NotifCard() {
  
  const [modal, setModal] = useState (false);
  const Toggle = () => setModal(!modal);

  return (
      <div className="notifCard">
        <div className="notifCardHeader">
          <div className="notifCardTitle">Стол №4</div>
          <div className="notifCardTime">19:02</div>
        </div>
        <div className="notifCardRemove" onClick={() => Toggle()}>
          <img src={notifCardTrash} alt="notifCardRemove" />
        </div>
        <div className="notifCardOrders">
          <div className="notifCardOrder">
            <span>Капучино</span>
            <span className="notifCardOrderPiece">x1,</span>
          </div>
          <div className="notifCardOrder">
            <span>Капучино</span>
            <span className="notifCardOrderPiece">x1,</span>
          </div>
          <div className="notifCardOrder">
            <span>Капучино</span>
            <span className="notifCardOrderPiece">x1,</span>
          </div>
        </div>
      </div>
  );
}