import React from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import NotifCard from "../notifCards/NotifCard";

const ModalNotification = ({ show, close }) => {
    
    return (
      <>
       {
       show ?
        <div
          className="modalContainer modalNotifContainer"
        >
          <div className="modal">
            <header className="modal_notif-header modal_header">
                <div className="modal_header-title">
                    Уведомления</div>
                <button className="close" onClick={() => close(!show)}>
                    <img src={cancelModal} alt="cancelModal" />
                </button>
            </header>
            <main className="modal-notif_content modal_content">
                <NotifCard />
                <NotifCard />
                <NotifCard />
                <NotifCard />
                <NotifCard />
                <NotifCard />
            </main>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default ModalNotification;