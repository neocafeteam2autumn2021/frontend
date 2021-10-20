import React from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import сroissant from '../../assets/images/сroissant.png';
import "./modal.css";

const ModalInfo = ({ show, close }) => {
    
    return (
      <>
       {
       show ?
        <div
          className="modalContainer"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
                <div className="modal_info-img">
                    <img src={сroissant} alt="modal_info-img" />
                </div>
                <button className="close" onClick={() => close()}>
                    <img src={cancelModal} alt="cancelModal" />
                </button>
            </header>
            <main className="modal_content">
                <div className="modal_info-title">
                    Круассан
                </div>
                <div className="modal_info-text">
                    Небольшое мучное кондитерское изделие, булочка в форме полумесяца из слоёного теста с содержанием сливочного масла не менее 82 % жирности.
                </div>
            </main>
            <footer className="modal_footer">
                <div className="modal_footer-block">
                    <div>125 c</div>
                </div>
                <div className="modal_footer-block">
                    <button className="modal_footerAddBtn">Добавить</button>
                </div>
            </footer>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default ModalInfo;