import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'simple-flexbox';
import InputProfile from '../../components/etc/InputProfile';
import Schedule from '../../components/etc/Schedule';
import LoadingComponent from '../../components/loading/LoadingComponent';
import Tabs from '../../components/tabs/Tabs';
// import { getStatistics } from '../../redux/actions/statisticsActions';
// import { signout } from '../../redux/actions/userActions';

function ProfileComponent() {

  const allStatistics = useSelector((state) => state.allStatistics);
  const { errorStatistics, loadingStatistics } = allStatistics;

  const dispatch = useDispatch();

  useEffect(() => {
    // if(errorStatistics && errorStatistics.indexOf("403") !== -1) {
    //   dispatch(signout());
    // }
  }, [dispatch, errorStatistics]);

  useEffect(() => {
    // dispatch(getStatistics());
  }, [dispatch]);

    return (
        <Column
          horizontal='center'>
            {loadingStatistics ? (
              <LoadingComponent loading={loadingStatistics} />
            ) : (
              <Tabs components={[<InputProfile />, <Schedule />]} names={["Личные данные", "График работы"]} />
            )}
        </Column>
    );
}

export default ProfileComponent;