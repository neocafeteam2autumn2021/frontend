import React from "react";
import cancelModal from '../../assets/images/cancelModal.png';
import "./modal.css";

const ModalCloseAccount = ({ showCLoseAcc, onClickCLoseAcc, setShowCLoseAcc }) => {

  const onClickAccept = () => {
    setShowCLoseAcc(true);
    onClickCLoseAcc(!showCLoseAcc);
  }
    
    return (
      <>
       {
       showCLoseAcc ?
        <div
          className="modalContainer closeAccContainer"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <div className="closeAccContainer-title">Закрытие счёта</div>
              <button className="close" onClick={() => onClickCLoseAcc(!showCLoseAcc)}>
                <img src={cancelModal} alt="cancelModal" />
              </button>
            </header>
            <main className="modal_content closeAccContainer_content">
              <table>
                <thead>
                  <tr>
                    <th>Наименование</th>
                    <th>Объем</th>
                    <th>Цена</th>
                    <th>Кол-во</th>
                    <th>Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Капучино:</td>
                    <td>350 мл</td>
                    <td>130 с</td>
                    <td>1 шт</td>
                    <td>130 с</td>
                  </tr>
                  <tr>
                    <td>Шоколадный сироп:</td>
                    <td></td>
                    <td>15 с</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Латте:</td>
                    <td>250</td>
                    <td>100 с</td>
                    <td>1 шт</td>
                    <td>100 с</td>
                  </tr>
                  <tr>
                    <td>Тирамиссу:</td>
                    <td></td>
                    <td>240 с</td>
                    <td>2 шт</td>
                    <td>140 с</td>
                  </tr>
                </tbody>
              </table>
            </main>
            <footer className="modal_footer">
              <div className="closeAccContainer_block">
                <div className="closeAccContainer_item">И того:<span>850 с</span></div>
                <div className="closeAccContainer_item">Списание:<span>68</span>балов</div>
                <div className="closeAccContainer_item">Со скидкой:<span>782 с</span></div>
              </div>
              <button onClick={onClickAccept} className="modal_footerAddBtn button">Закрыть счёт</button>
            </footer>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default ModalCloseAccount;