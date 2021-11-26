import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
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

    const [showQuickOrder, setShowQuickOrder] = useState(true);

    return (
        <SidebarContext>
            <div className={classes.container}>
                <SidebarComponent />
                <div className={classes.mainBlock}>
                    <QuickOrder showQuickOrder={showQuickOrder} setShowQuickOrder={setShowQuickOrder} />
                    <div className={showQuickOrder ? classes.contentBlockQuickOrder : classes.contentBlock}>
                        <PrivateRoutes />
                    </div>
                </div>
            </div>
        </SidebarContext>
    );
}

export default PrivateSection;
