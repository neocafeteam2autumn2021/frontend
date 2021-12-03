import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cancelModal from '../../assets/images/cancelModal.png';
import { addQuickOrder } from "../../redux/actions/orderActions";
import { refreshToken } from "../../redux/actions/userActions";
import "./modal.css";

const ModalInfo = ({ show, setShow, data }) => {

  const dispatch = useDispatch();

  const addQuickOrd = useSelector((state) => state.addQuickOrder);
  const { addQuickOrderData, errorAddQuickOrder } = addQuickOrd;

  useEffect(() => {
    if(addQuickOrderData) {
      setShow(false);
    } else if(errorAddQuickOrder && errorAddQuickOrder.indexOf("401")) {
      const { refresh } = JSON.parse(localStorage.getItem('userInfo'));
      dispatch(refreshToken(refresh));
      }
  }, [dispatch, addQuickOrderData, setShow, errorAddQuickOrder]);

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
                <button className="close" onClick={() => setShow(false)}>
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