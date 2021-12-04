import React from "react";
import { useDispatch } from "react-redux";
import cancelModal from '../../assets/images/cancelModal.png';
import { closeOrder } from "../../redux/actions/orderActions";
import "./modal.css";

const ModalCloseAccount = ({ data, showCLoseAcc, onClickCLoseAcc, setShowCLoseAcc }) => {

  const dispatch = useDispatch();

  const onClickAccept = () => {
    setShowCLoseAcc(true);
    onClickCLoseAcc(!showCLoseAcc);
    dispatch(closeOrder(data.id));
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
                  {data.orders && data.orders.map((order) => {
                    return <tr key={order.id}>
                    <td>{order && order.food.name}</td>
                    <td>{order.chosen_food_measure && order.chosen_food_measure.volume}</td>
                    <td>{order.chosen_food_measure && (order.chosen_food_measure.add_cost * 1) + ' c'}</td>
                    <td>{order && order.quantity} шт</td>
                    <td>{order && order.total_cost * 1} с</td>
                  </tr>
                  })}
                </tbody>
              </table>
            </main>
            <footer className="modal_footer">
              <div className="closeAccContainer_block">
                <div className="closeAccContainer_item">И того:<span>{data.the_total_cost * 1} с</span></div>
                <div className="closeAccContainer_item">Списание:<span>{data.used_bonuses}</span>балов</div>
                <div className="closeAccContainer_item">Со скидкой:<span>{data.the_total_cost * 1} с</span></div>
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