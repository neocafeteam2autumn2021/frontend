import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from '../components/sidebar';
import PrivateRoutes from './PrivateRoutes';

const useStyles = createUseStyles({
    container: {
        height: '100%',
    },
    mainBlock: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -2,
        marginLeft: 80,
        backgroundColor: ({ theme }) => theme.color.blueCharcoal,
        '@media (max-width: 1080px)': {
            marginLeft: 0
        },
    },
    contentBlock: {
        padding: 0,
    }
});

function PrivateSection() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <SidebarContext>
            <Row className={classes.container}>
                <SidebarComponent />
                <Column flexGrow={1} className={classes.mainBlock}>
                    <div className={classes.contentBlock}>
                        <PrivateRoutes />
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    );
}

export default PrivateSection;
