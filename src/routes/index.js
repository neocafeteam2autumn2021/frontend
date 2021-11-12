import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import PrivateSection from '../routes/PrivateSection';
import PublicRoutes from '../routes/PublicRoutes';

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    const userSignin = useSelector((state) => state.userToken);
    const { userInfoFull } = userSignin;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return !userInfoFull ? <PublicRoutes /> : <PrivateSection />;
}

export default Routes;
