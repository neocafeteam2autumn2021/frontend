import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { useSidebar } from '../../hooks/useSidebar';

const useStyles = createUseStyles({
    activeContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.23)'
    },
    container: {
        display: 'flex',
        height: 100,
        width: 70,
        cursor: 'pointer',
        borderRadius: '10px',
        marginTop: 30,
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.23)'
        },
        transition: 'all 0.2s ease-in-out'
    },
    title: {
        fontSize: '15px',
        lineHeight: '19px',
        color: '#FFFFFF',
        textShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)'
    }
});

function MenuItemComponent({ image, alt, id, items = [], onClick, title }) {
    const theme = useTheme();
    const { isActive, onItemClick } = useSidebar({
        item: id,
        items
    });
    const classes = useStyles({ theme, isActive });
    const classNameContainer = [classes.container, isActive && classes.activeContainer].join(' ');

    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        onItemClick();
    }

    return (
        <Column vertical='center' horizontal='center' key={id} onClick={onItemClicked} className={classNameContainer}>
            <img src={image} alt={alt} />
            <span className={classes.title}>{title}</span>
        </Column>
    );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
    icon: func,
    id: string,
    onClick: func,
    items: arrayOf(string),
    title: string
};

export default MenuItemComponent;
