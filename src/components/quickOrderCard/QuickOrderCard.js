import React, { useState } from "react";
import quickOrderCardOption from '../../assets/images/quickOrderCardOption.png';
import cappuccino from '../../assets/images/cappuccino.png';
import InputSpinnerNumber from "../etc/InputSpinnerNumber";
import "./quickOrderCard.css";
import QuickOrderExtra from "../modal/QuickOrderExtra";

export default function QuickOrderCard({options}) {
  
  const [modal, setModal] = useState (false);
  const [pieces, setPieces] = useState (1);
  const Toggle = () => setModal(!modal);

  return (
      <div className="quickOrderCard">
        <QuickOrderExtra show={modal} close={Toggle} />
        <div className="quickOrderCardContent">
          <div className="quickOrderCardLeftBlock">
            <img src={cappuccino} alt="cappuccino" />
          </div>
          <div className="quickOrderCardRightBlock">
            <div className="quickOrderCardHeader">
              <div className="quickOrderCardTitle">Капучино</div>
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
          <div className="quickOrderCardPrice">130 с</div>
          <InputSpinnerNumber pieces={pieces} setPieces={setPieces} background={"no"} />
        </div>
      </div>
  );
}