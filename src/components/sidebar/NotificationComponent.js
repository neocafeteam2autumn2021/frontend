import React, { useState } from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import notification_img from '../../assets/images/notification_img.png';
import ModalNotification from '../modal/ModalNotification';
// import { onMessageListener } from '../../firebase';
// import Notifications from '../etc/Notifications';

const useStyles = createUseStyles((theme) => ({
    activeContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.23)'
    },
    container: {
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.23)'
        },
        borderRadius: '10px',
        padding: ['4px', '10px', '10px', '10px']
    },
    badge: {
        backgroundColor: theme.color.burntSienna,
        position: 'absolute',
        top: 7,
        right: 13,
        color: 'white',
        borderRadius: '50%',
        padding: [0, 6],
        fontSize: 13,
    }
}));

function NotificationComponent(props) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    // const [show, setShow] = useState(false);

    const [ isActive, setActive ] = useState(false);

    function onLogoClick() {
        setActive(!isActive);
    }

    // onMessageListener()
    // .then((payload) => {
    //     setShow(true);
    //     console.log(payload);
    // })
    // .catch((err) => console.log("failed: ", err));

    return (
        <div style={{ paddingTop: 13, paddingBottom: 100, width: 70, display: 'flex', justifyContent: 'center' }}>
            <ModalNotification show={isActive} close={setActive} />
            {/* {!show ? <Notifications /> : null} */}
            <Row
                className={isActive ?
                    `${classes.container} ${classes.activeContainer}`
                    :  classes.container} onClick={onLogoClick}>
                <img src={notification_img} alt='notification' />
                <span className={classes.badge}>2</span>
            </Row>
        </div>
    );
}

export default NotificationComponent;
