import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import QuickOrder from '../components/quickOrder/QuickOrder';
import { SidebarComponent, SidebarContext } from '../components/sidebar';
import Toast from '../components/toast/Toast';
import { getQuickOrders } from '../redux/actions/orderActions';
import { refreshToken } from '../redux/actions/userActions';
import PrivateRoutes from './PrivateRoutes';

const useStyles = createUseStyles({
    mainBlock: {
        marginLeft: 80,
        backgroundColor: ({ theme }) => theme.color.blueCharcoal,
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'space-around',
    },
    contentBlock: {
        padding: 0,
    },
    contentBlockQuickOrder: {
        width: '920px',
        padding: 0,
        '& .tabHeaderMenu': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            margin: ['30px', 0],
        },
        '& .tabHeaderMenu li': {
            margin: [0, '10px'],
        },
        '& .tabHeaderOrders': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        '& .tabHeaderOrders li': {
            margin: ['10px', '5px'],
        },
        '& .tabChildMenu': {
            justifyContent: 'space-around',
        },
    }
});

function PrivateSection() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const dispatch = useDispatch();

    const [list, setList] = useState([]);

    const quickOrders = useSelector((state) => state.quickOrders);
    const { quickOrdersData, errorQuickOrders } = quickOrders;

    useEffect(() => {
        if(errorQuickOrders && errorQuickOrders.indexOf("401")) {
            const { refresh } = JSON.parse(localStorage.getItem('userInfo'));
            dispatch(refreshToken(refresh));
            dispatch(getQuickOrders());
        } else if(errorQuickOrders && errorQuickOrders.indexOf("401") === -1) {
            setList([...list, {id: 1, title: 'Ошибка', description: errorQuickOrders, type: "error"}]);
        }
      }, [errorQuickOrders, dispatch, list]);

    return (
        <SidebarContext>
            <Toast toastList={list} />
            <div className={classes.container}>
                <SidebarComponent />
                <div className={classes.mainBlock}>
                    <QuickOrder data={quickOrdersData} />
                    <div className={quickOrdersData ? classes.contentBlockQuickOrder : classes.contentBlock}>
                        <PrivateRoutes />
                    </div>
                </div>
            </div>
        </SidebarContext>
    );
}

export default PrivateSection;
