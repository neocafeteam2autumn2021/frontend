import React, { useState } from "react";
import menuCardInfo from '../../assets/images/menuCardInfo.png';
import ModalInfo from "../modal/ModalInfo.js";
import "./menuCard.css";
import "../modal/modal.css";

export default function MenuCard({menuCardImage, menuCardTitle}) {
  
  const [modal, setModal] = useState (false);
  const Toggle = () => setModal(!modal);

  let price = 100;
  return (
      <div className="menuCard">
        <ModalInfo show={modal} close={Toggle} />
        <div className="menuCardTitle">{menuCardTitle}</div>
        <div className="menuCardInfo" onClick={() => Toggle()}>
          <img src={menuCardInfo} alt="menuCardInfo" />
        </div>
        <div className="menuCardImage">
          <img src={menuCardImage} alt="coffee" />
        </div>
        <div className="menuCardCircle"></div>
        <div className="menuCardPrice">{price} с</div>
      </div>
  );
}