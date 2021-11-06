import React from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import "./modal.css";

const ModalAccept = ({ showAccept, onClickAccepted, setAccepted }) => {

  const onClickAccept = () => {
    setAccepted(true);
    onClickAccepted(!showAccept);
  }
    
    return (
      <>
       {
       showAccept ?
        <div
          className="modalContainer"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <button className="close" onClick={() => onClickAccepted(!showAccept)}>
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