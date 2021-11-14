import React from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import "./modal.css";

const ModalLogOut = ({ showLogout, setShowLogout, onClickLogOut }) => {
    
    return (
      <>
       {
       showLogout ?
        <div
          className="modalContainer modalLogOutContainer"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <button className="close" onClick={() => setShowLogout(false)}>
                <img src={cancelModal} alt="cancelModal" />
              </button>
              <div className="modalAcceptText">Вы действительно хотите выйти?</div>
            </header>
            <footer className="modal_footer modal_footer-logOut">
              <button onClick={onClickLogOut} className="modal_footerAddBtn button">Да</button>
              <button onClick={() => setShowLogout(false)} className="modal_footerAddBtn button">Нет</button>
            </footer>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default ModalLogOut;