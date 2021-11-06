import React, { useState } from "react";
import menuCardInfo from '../../assets/images/menuCardInfo.png';
import ModalBeverageCard from "../modal/ModalBeverageCard";
import ModalInfo from "../modal/ModalInfo.js";
import "./menuCard.css";

export default function MenuCard({menuCardImage, menuCardTitle, type}) {
  
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [showBevCard, setShowBevCard] = useState(false);

  let prices = [65, 180, 350];
  return (
    <>
      <ModalBeverageCard showBevCard={showBevCard} setShowBevCard={setShowBevCard} toggle={Toggle} menuCardTitle={menuCardTitle} menuCardImage={menuCardImage} prices={prices}/>
      <ModalInfo show={modal} setModal={setModal} />
      <div className="menuCard" onClick={() => type && setShowBevCard(true)}>
        <div className="menuCardTitle">{menuCardTitle}</div>
        <div className="menuCardInfo" onClick={Toggle}>
          <img src={menuCardInfo} alt="menuCardInfo" />
        </div>
        <div className="menuCardImage">
          <img src={menuCardImage} alt="coffee" />
        </div>
        <div className="menuCardCircle"></div>
        <div className="menuCardPrice">{prices[1]} с</div>
      </div>
    </>
  );
}