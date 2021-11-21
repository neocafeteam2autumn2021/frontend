import React, { useState } from "react";
import menuCardInfo from '../../assets/images/menuCardInfo.png';
import ModalBeverageCard from "../modal/ModalBeverageCard";
import ModalInfo from "../modal/ModalInfo.js";
import "./menuCard.css";

export default function MenuCard({data}) {
  
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [showBevCard, setShowBevCard] = useState(false);

  return (
    <>
      <ModalBeverageCard showBevCard={showBevCard} setShowBevCard={setShowBevCard} toggle={Toggle} data={data} />
      <ModalInfo show={modal} setModal={setModal} data={data} />
      <div className="menuCard" onClick={() => data.food_volumes.length && setShowBevCard(true)}>
        <div className="menuCardTitle">{data.name}</div>
        {!data.food_volumes.length ? <div className="menuCardInfo" onClick={Toggle}>
          <img src={menuCardInfo} alt="menuCardInfo" />
        </div> : null}
        <div className="menuCardImage">
          <img src={data.photo} alt="coffee" />
        </div>
        <div className="menuCardCircle"></div>
        <div className="menuCardPrice">{data.price.slice(0, data.price.length-2)} с</div>
      </div>
    </>
  );
}