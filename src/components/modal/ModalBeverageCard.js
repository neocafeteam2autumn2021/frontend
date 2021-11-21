import React from "react";
import "./modal.css";
import menuCardInfo from '../../assets/images/menuCardInfo.png';

const ModalBeverageCard = ({ showBevCard, setShowBevCard, toggle, data }) => {

  const onClickVolume = () => {
    setShowBevCard(false);
  }
    
    return (
      <>
       {
       showBevCard &&
        <div
          className="modalContainer beverageCardContainer"
          onClick={() => setShowBevCard(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="menuCardInfo" onClick={toggle}>
              <img src={menuCardInfo} alt="menuCardInfo" />
            </div>
            <div className="beverageCardImage">
              <img src={data.photo} alt="coffee" />
            </div>
            <div className="beverageCardCircle"></div>
            <div className="beverageCardTitle">{data.name}</div>
            <div className="beverageCardPrices">
              {data.food_volumes.map((item) => {
                return <div className="beverageCardPrice" onClick={onClickVolume} key={item.id}>
                  <div className="beverageCardPriceCircle"></div>
                  <div className="beverageCardPriceSize">{item.name.slice(0, 1)}</div>
                  <div className="beverageCardPriceVolume">250 мл</div>
                  <div className="beverageCardPriceSelf">{item.add_cost.slice(0, item.add_cost.length-2)} с</div>
                </div>
              })}
              {/* <div className="beverageCardPrice" onClick={onClickVolume}>
                <div className="beverageCardPriceCircle"></div>
                <div className="beverageCardPriceSize">S</div>
                <div className="beverageCardPriceVolume">250 мл</div>
                <div className="beverageCardPriceSelf">{prices[0]} с</div>
              </div>
              <div className="beverageCardPrice" onClick={onClickVolume}>
                <div className="beverageCardPriceCircle"></div>
                <div className="beverageCardPriceSize">M</div>
                <div className="beverageCardPriceVolume">350 мл</div>
                <div className="beverageCardPriceSelf">{prices[1]} с</div>
              </div>
              <div className="beverageCardPrice" onClick={onClickVolume}>
                <div className="beverageCardPriceCircle"></div>
                <div className="beverageCardPriceSize">L</div>
                <div className="beverageCardPriceVolume">450 мл</div>
                <div className="beverageCardPriceSelf">{prices[2]} с</div>
              </div> */}
            </div>
          </div>
        </div>
       }
      </>
    );
  };
  
  export default ModalBeverageCard;