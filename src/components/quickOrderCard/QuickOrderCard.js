import React, { useState } from "react";
import quickOrderCardOption from '../../assets/images/quickOrderCardOption.png';
import cappuccino from '../../assets/images/cappuccino.png';
import InputSpinnerNumber from "../etc/InputSpinnerNumber";
import "./quickOrderCard.css";
import QuickOrderExtra from "../modal/QuickOrderExtra";

export default function QuickOrderCard({options, data}) {
  
  const [modal, setModal] = useState (false);
  const [pieces, setPieces] = useState (data.quantity);
  const Toggle = () => setModal(!modal);

  return (
      <div className="quickOrderCard">
        <QuickOrderExtra show={modal} close={Toggle} data={data} />
        <div className="quickOrderCardContent">
          <div className="quickOrderCardLeftBlock">
            <img src={data.food.photo} alt="cappuccino" />
          </div>
          <div className="quickOrderCardRightBlock">
            <div className="quickOrderCardHeader">
              <div className="quickOrderCardTitle">{data.food.name}</div>
              <div className="quickOrderCardOption" onClick={() => Toggle()}>
                <img src={quickOrderCardOption} alt="quickOrderCardOption" />
              </div>
            </div>
            <ul className="cardOrderOptions">
              {options && options.map((item) =>
                <li key={item}>{item}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="quickOrderCardFooter">
          <div className="quickOrderCardPrice">{data.total_cost.slice(0, data.total_cost.length-2)} с</div>
          <InputSpinnerNumber pieces={pieces} setPieces={setPieces} background={"no"} />
        </div>
      </div>
  );
}