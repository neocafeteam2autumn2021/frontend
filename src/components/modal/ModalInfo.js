import React from "react";
import { useDispatch } from "react-redux";
import cancelModal from '../../assets/images/cancelModal.png';
import { addQuickOrder } from "../../redux/actions/orderActions";
import "./modal.css";

const ModalInfo = ({ show, setModal, data }) => {

  const dispatch = useDispatch();

  const onClickAdd = () => dispatch(addQuickOrder(data.id));
    return (
      <>
       {
       show &&
        <div
          className="modalContainer"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
                <div className="modal_info-img">
                    <img src={data.photo} alt="modal_info-img" />
                </div>
                <button className="close" onClick={() => setModal(false)}>
                    <img src={cancelModal} alt="cancelModal" />
                </button>
            </header>
            <main className="modal_content">
                <div className="modal_info-title">{data.name}</div>
                <div className="modal_info-text">{data.description}</div>
            </main>
            <footer className="modal_footer">
                <div className="modal_footer-block">
                    <div>{data.price.slice(0, data.price.length-2)} c</div>
                </div>
                <div className="modal_footer-block">
                    {!data.food_volumes.length ? <button className="modal_footerAddBtn" onClick={onClickAdd}>Добавить</button> : null}
                </div>
            </footer>
          </div>
        </div>
       }
      </>
    );
  };
  
  export default ModalInfo;