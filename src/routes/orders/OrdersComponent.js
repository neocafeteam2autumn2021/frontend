import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'simple-flexbox';
import LoadingComponent from '../../components/loading/LoadingComponent';
import Tabs from '../../components/tabs/Tabs';
import TabsOrders from '../../components/tabsOrders/TabsOrders';
import Toast from '../../components/toast/Toast';
import { getPlaceOrders, getTakeawayOrders } from '../../redux/actions/orderActions';
import { refreshToken } from '../../redux/actions/userActions';
import { UPDATE_PLACE_ORDERS_RESET, UPDATE_TAKEAWAY_ORDERS_RESET } from '../../redux/constants/orderConstants';

function OrdersComponent() {

  const placeOrders = useSelector((state) => state.placeOrders);
  const { loadingPlaceOrders, placeOrdersData, errorPlaceOrders } = placeOrders;
  const takeawayOrders = useSelector((state) => state.takeawayOrders);
  const { loadingTakeawayOrders, takeawayOrdersData, errorTakeawayOrders } = takeawayOrders;
  const updatePlaceOrder = useSelector((state) => state.updatePlaceOrder);
  const { updatePlaceOrderData } = updatePlaceOrder;
  const updateTakeawayOrder = useSelector((state) => state.updateTakeawayOrder);
  const { updateTakeawayOrderData } = updateTakeawayOrder;

  const dispatch = useDispatch();

  const [sectionName, setSectionName] = useState("В заведении");
  const [placeOrdersId, setPlaceOrdersId] = useState(1);
  const [takeawayOrdersId, setTakeawayOrdersId] = useState(1);

  useEffect(() => {
    if((errorPlaceOrders && errorPlaceOrders.indexOf("401")) || (errorTakeawayOrders && errorTakeawayOrders.indexOf("401"))) {
      const { refresh } = JSON.parse(localStorage.getItem('userInfo'));
      dispatch(refreshToken(refresh));
      dispatch(getPlaceOrders(placeOrdersId));
      dispatch(getTakeawayOrders(takeawayOrdersId));
    }
  }, [dispatch, errorPlaceOrders, errorTakeawayOrders, placeOrdersId, takeawayOrdersId]);

  useEffect(() => {
    dispatch(getPlaceOrders(placeOrdersId));
    dispatch(getTakeawayOrders(takeawayOrdersId));
  }, [dispatch, placeOrdersId, takeawayOrdersId]);

  useEffect(() => {
    if(updateTakeawayOrderData) {
      setTimeout(function(){ dispatch({ type: UPDATE_TAKEAWAY_ORDERS_RESET}); }, 3000);
      dispatch(getTakeawayOrders(takeawayOrdersId));
    }
    else if(updatePlaceOrderData) {
      setTimeout(function(){ dispatch({ type: UPDATE_PLACE_ORDERS_RESET}); }, 3000);
      dispatch(getPlaceOrders(placeOrdersId));
    }
  }, [dispatch, placeOrdersId, takeawayOrdersId, updatePlaceOrderData, updateTakeawayOrderData]);


    return (
        <Column
          horizontal='center'>
            {loadingTakeawayOrders || loadingPlaceOrders ? (
              <LoadingComponent loading />
            ) : (
              <>
                {updatePlaceOrderData || updateTakeawayOrderData ? <Toast toastList={[{id: 2, title: 'Успешно перенесен', type: "success"}]} /> : null}
                <Tabs components={
                  [<TabsOrders changeSection={setPlaceOrdersId} sectionId={placeOrdersId} type="placeOrder" data={placeOrdersData ? placeOrdersData : null} />,
                  <TabsOrders changeSection={setTakeawayOrdersId} sectionId={takeawayOrdersId} type="takeawayOrder" data={takeawayOrdersData ? takeawayOrdersData : null} />]}
                  names={["В заведении", "На вынос"]} sectionName={sectionName} setSectionName={setSectionName} />
              </>
            )}
        </Column>
    );
}

export default OrdersComponent;