import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Column } from 'simple-flexbox';
import InputProfile from '../../components/etc/InputProfile';
import Schedule from '../../components/etc/Schedule';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ModalLogOut from '../../components/modal/ModalLogOut';
import Tabs from '../../components/tabs/Tabs';
import { getProfileInfo } from '../../redux/actions/profileActions';
import { refreshToken, signout } from '../../redux/actions/userActions';
import SLUGS from '../../resources/slugs';
// import { getStatistics } from '../../redux/actions/statisticsActions';
// import { signout } from '../../redux/actions/userActions';

const useStyles = createUseStyles((theme) => ({
  logOutButton: {
    ...theme.typography.button,
    width: '120px',
    height: '64px',
    borderRadius: 30,
    padding: [19.5, 0],
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    backgroundColor: theme.color.emerald,
    color: 'white',
    position: "fixed",
    top: 26,
    right: 32
  }
}));

function ProfileComponent() {

  const theme = useTheme();
  const classes = useStyles({ theme });
  const history = useHistory();

  const profileInfo = useSelector((state) => state.profileInfo);
  const { errorProfile, loadingProfile, dataProfile } = profileInfo;

  const dispatch = useDispatch();

  const [showLogout, setShowLogout] = useState(false);

  const onClickLogOut = () => {
    dispatch(signout());
    setShowLogout(false);
    history.push(SLUGS.init);
  }

  useEffect(() => {
    if(errorProfile && errorProfile.indexOf("401")) {
      const { refresh } = JSON.parse(localStorage.getItem('userInfo'));
      dispatch(refreshToken(refresh));
      dispatch(getProfileInfo());
    }
  }, [dispatch, errorProfile]);

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);

    return (
        <Column
          horizontal='center' style={{width: '100%'}}>
            {loadingProfile ? (
              <LoadingComponent loading={loadingProfile} />
            ) : <>
              <Tabs components={[<InputProfile userData={dataProfile ? dataProfile.user : null} />,
                <Schedule userData={dataProfile ? dataProfile.schedules : null} />]} names={["Личные данные", "График работы"]} />
              <ModalLogOut onClickLogOut={onClickLogOut} showLogout={showLogout} setShowLogout={setShowLogout} />
              <button
                className={classes.logOutButton}
                onClick={() => setShowLogout(true)}
                >Выйти</button>
            </>}
        </Column>
    );
}

export default ProfileComponent;