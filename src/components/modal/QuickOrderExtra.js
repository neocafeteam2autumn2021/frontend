import React, { useState } from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import InputSpinnerNumber from "../etc/InputSpinnerNumber";
import './modal.css';

export default function QuickOrderExtra({ show, close }) {
  const [state, setState] = useState({
        "Шоколадный сироп": true,
        "Карамельный сироп": false,
        "Ванильный сироп": false
  });
  const [pieces, setPieces] = useState(1);
  const handleToggle = ({ target }) =>
      setState(s => ({ ...s, [target.name]: !s[target.name] }));
  return (
    <>
     {
     show ?
      <div
        className="modalContainer"
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
                <div className="modal_header-title">
                    Капучино {pieces * 110} с</div>
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
                  <div>125 c</div>
              </div>
              <div className="modal_footer-block">
                  <InputSpinnerNumber pieces={pieces} setPieces={setPieces} />
                  <div className="modal_footer-btn">
                      <button className="modal_footerAddBtn">Добавить</button>
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