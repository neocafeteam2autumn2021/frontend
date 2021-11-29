import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'simple-flexbox';
import LoadingComponent from '../../components/loading/LoadingComponent';
import Tabs from '../../components/tabs/Tabs';
import TabsOrders from '../../components/tabsOrders/TabsOrders';
import { getPlaceOrders, getTakeawayOrders } from '../../redux/actions/orderActions';
import { refreshToken } from '../../redux/actions/userActions';
// import { signout } from '../../redux/actions/userActions';

function OrdersComponent() {

  const placeOrders = useSelector((state) => state.placeOrders);
  const { loadingPlaceOrders, placeOrdersData, errorPlaceOrders } = placeOrders;
  const takeawayOrders = useSelector((state) => state.takeawayOrders);
  const { loadingTakeawayOrders, takeawayOrdersData, errorTakeawayOrders } = takeawayOrders;

  const dispatch = useDispatch();

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


    return (
        <Column
          horizontal='center'>
            {loadingTakeawayOrders || loadingPlaceOrders ? (
              <LoadingComponent loading />
            ) : (
              <>
                <Tabs components={
                  [<TabsOrders changeSection={setPlaceOrdersId} sectionId={placeOrdersId} data={placeOrdersData ? placeOrdersData : null} />,
                  <TabsOrders changeSection={setTakeawayOrdersId} sectionId={takeawayOrdersId} data={takeawayOrdersData ? takeawayOrdersData : null} />]}
                  names={["В заведении", "На вынос"]} />
              </>
            )}
        </Column>
    );
}

export default OrdersComponent;