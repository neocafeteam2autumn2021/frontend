import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cancelModal from '../../assets/images/cancelModal.png';
import { updateQuickOrder } from "../../redux/actions/orderActions";
import InputSpinnerNumber from "../etc/InputSpinnerNumber";
import './modal.css';

export default function QuickOrderExtra({ show, close, data }) {
    const dispatch = useDispatch();

    const updateQuickOrd = useSelector((state) => state.updateQuickOrder);
    const { loadingUpdateQuickOrder, updateQuickOrderData, errorUpdateQuickOrder } = updateQuickOrd;

    console.log(loadingUpdateQuickOrder, updateQuickOrderData, errorUpdateQuickOrder);

    const [state, setState] = useState({});
    const [pieces, setPieces] = useState(1);
    const handleToggle = ({ target }) =>
        setState(s => ({ ...s, [target.name]: !s[target.name] }));
    return (
    <>
        {
        show ?
        <div
            className="modalContainer modalQuickOrderContainer"
        >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
                <div className="modal_header-title">
                    {data.food.name} {data.food.price * 1} с</div>
                <button className="close" onClick={() => close()}>
                    <img src={cancelModal} alt="cancelModal" />
                </button>
            </header>
            <main className="modal_content">
                <div className="modal_content-title">Дополнительно</div>
                <div>
                  {Object.keys(state).map(key => (
                    <label className="modal_content-label" key={key}>
                            <input
                                type="checkbox"
                                onChange={handleToggle}
                                key={key}
                                id={key}
                                name={key}
                                className="modal_content-checkbox"
                                checked={state[key]}
                            />
                            <label htmlFor={key}></label>
                            <span className="modal_content-name">{key}</span>
                            <span className="modal_content-price">+15с</span>
                        </label>
                    ))}
                </div>
          </main>
          <footer className="modal_footer">
                <div className="modal_footer-block">
                    <div>Итого:</div>
                    <div>{data.food.price * pieces} c</div>
                </div>
                <div className="modal_footer-block">
                    <InputSpinnerNumber pieces={pieces} setPieces={setPieces} />
                    <div className="modal_footer-btn">
                        <button onClick={() => dispatch(updateQuickOrder(pieces, data.id))} className="modal_footerAddBtn">Сохранить</button>
                    </div>
                </div>
          </footer>
        </div>
      </div>
      : null
     }
    </>
  );
};