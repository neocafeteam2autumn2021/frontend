import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'simple-flexbox';
import LoadingComponent from '../../components/loading/LoadingComponent';
// import { getStatistics } from '../../redux/actions/statisticsActions';
// import { signout } from '../../redux/actions/userActions';
import SearchInput from '../../components/etc/SearchInput';
import Tabs from '../../components/tabs/Tabs';

function MainMenuComponent() {

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
              <>
                <div></div>
                <>
                  <SearchInput />
                  <Tabs />
                </>
              </>
            )}
        </Column>
    );
}

export default MainMenuComponent;