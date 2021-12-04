import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import cancelModal from '../../assets/images/cancelModal.png';
import { RELEASE_QUICK_ORDER_RESET } from "../../redux/constants/orderConstants";
import SLUGS from "../../resources/slugs";
import "./modal.css";

const ModalAccept = ({ showAccept, setShowAccept, setAccepted }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickAccept = () => {
    setShowAccept(false);
    setAccepted(true);
    dispatch({ type: RELEASE_QUICK_ORDER_RESET });
    history.push(SLUGS.orders);
  }
    
    return (
      <>
       {
       showAccept ?
        <div
          className="modalContainer modalAcceptContainer"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <button className="close" onClick={() => setShowAccept(false)}>
                <img src={cancelModal} alt="cancelModal" />
              </button>
              <div className="modalAcceptText">Заказ успешно оформлен</div>
            </header>
            <footer className="modal_footer">
              <button onClick={onClickAccept} className="modal_footerAddBtn button">Перейти к заказом</button>
            </footer>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default ModalAccept;