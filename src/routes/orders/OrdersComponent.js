import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Column } from 'simple-flexbox';
import LoadingComponent from '../../components/loading/LoadingComponent';
import Tabs from '../../components/tabs/Tabs';
import TabsOrders from '../../components/tabsOrders/TabsOrders';
// import { getStatistics } from '../../redux/actions/statisticsActions';
// import { signout } from '../../redux/actions/userActions';

function OrdersComponent() {

  // const allStatistics = useSelector((state) => state.allStatistics);
  // const { errorStatistics, loadingStatistics } = allStatistics;

  const dispatch = useDispatch();

  let loadingStatistics = false;

  // useEffect(() => {
    // if(errorStatistics && errorStatistics.indexOf("403") !== -1) {
    //   dispatch(signout());
    // }
  // }, [dispatch, errorStatistics]);

  useEffect(() => {
    // dispatch(getStatistics());
  }, [dispatch]);

    return (
        <Column
          horizontal='center'>
            {loadingStatistics ? (
              <LoadingComponent loading={loadingStatistics} />
            ) : (
              <>
                <Tabs components={[<TabsOrders />, <TabsOrders />]} names={["В заведении", "На вынос"]} />
              </>
            )}
        </Column>
    );
}

export default OrdersComponent;