import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import QuickOrder from '../components/quickOrder/QuickOrder';
import { SidebarComponent, SidebarContext } from '../components/sidebar';
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

    const quickOrders = useSelector((state) => state.quickOrders);
    const { loadingQuickOrders, quickOrdersData, errorQuickOrders } = quickOrders;

    return (
        <SidebarContext>
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
