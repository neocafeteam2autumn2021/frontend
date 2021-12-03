import React, { useEffect } from "react";
import "./modal.css";
import menuCardInfo from '../../assets/images/menuCardInfo.png';
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../redux/actions/userActions";
import { addQuickOrder } from "../../redux/actions/orderActions";

const ModalBeverageCard = ({ showBevCard, setShowBevCard, toggle, data }) => {
  const dispatch = useDispatch();

  const addQuickOrd = useSelector((state) => state.addQuickOrder);
  const { addQuickOrderData, errorAddQuickOrder } = addQuickOrd;

  useEffect(() => {
    if(addQuickOrderData) {
      setShowBevCard(false);
    } else if(errorAddQuickOrder && errorAddQuickOrder.indexOf("401")) {
      const { refresh } = JSON.parse(localStorage.getItem('userInfo'));
      dispatch(refreshToken(refresh));
    }
  }, [dispatch, addQuickOrderData, setShowBevCard, errorAddQuickOrder]);
    
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
                return <div className="beverageCardPrice" onClick={() => dispatch(addQuickOrder(data.id, item.id))} key={item.id}>
                  <div className="beverageCardPriceCircle"></div>
                  <div className="beverageCardPriceSize">{item.name.slice(0, 1)}</div>
                  <div className="beverageCardPriceVolume">{item.volume}</div>
                  <div className="beverageCardPriceSelf">{item.add_cost.slice(0, item.add_cost.length-2)} с</div>
                </div>
              })}
            </div>
          </div>
        </div>
       }
      </>
    );
  };
  
  export default ModalBeverageCard;