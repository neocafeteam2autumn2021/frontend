import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import checkIcon from '../../assets/images/check.svg';
import errorIcon from '../../assets/images/error.svg';
import infoIcon from '../../assets/images/info.svg';
import warningIcon from '../../assets/images/warning.svg';

import './Toast.css';

const baseTypes = {
    backgroundColors: {
        success: '#5cb85c',
        error: '#d9534f',
        info: '#5bc0de',
        warning: '#f0ad4e'
    },
    icons: {
        success: checkIcon,
        error: errorIcon,
        info: infoIcon,
        warning: warningIcon
    }
}

const Toast = props => {

    const { toastList } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList([...toastList]);

        // eslint-disable-next-line
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, 5000);
        
        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [toastList, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    return (
        <>
            <div className={`notification-container top-right`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`notification toast top-right`}
                            style={{ backgroundColor: baseTypes.backgroundColors[toast.type]}}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={baseTypes.icons[toast.type]} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description ? toast.description : ''}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    dismissTime: PropTypes.number
}

export default Toast;