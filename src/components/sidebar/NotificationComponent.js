import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import SLUGS from '../../resources/slugs';
import notification_img from '../../assets/images/notification_img.png';
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles((theme) => ({
    container: {
        cursor: 'pointer',
        position: 'relative'
    },
    badge: {
        backgroundColor: theme.color.burntSienna,
        position: 'absolute',
        top: 3,
        right: 3,
        color: 'white',
        borderRadius: '50%',
        padding: [0, 6],
        fontSize: 13,
    }
}));

function NotificationComponent(props) {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });

    function onLogoClick() {
        push(SLUGS.menu);
    }

    return (
        <Row className={classes.container} onClick={onLogoClick}>
            <img src={notification_img} alt='notification' />
            <span className={classes.badge}>2</span>
        </Row>
    );
}

export default NotificationComponent;
