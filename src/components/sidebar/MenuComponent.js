import React, { useState } from 'react';
import { useTheme } from 'react-jss';
import { slide as Menu } from 'react-burger-menu';

const getMenuStyles = ({ theme }) => ({
    bmBurgerButton: {
        position: 'absolute',
        width: 26,
        height: 20,
        left: 25,
        top: 20,
        zIndex: 0
    },
    bmBurgerBars: {
        background: 'white'
    },
    bmBurgerBarsHover: {
        background: 'red'
    },
    bmCrossButton: {
        display: 'none'
    },
    bmCross: {
        background: theme.color.grayishBlue3
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: 80,
        zIndex: 0,
    },
    bmMenu: {
        background: theme.color.blueCharcoal,
    },
    bmItemList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    // bmItem: {
    //     outline: 'none',
    //     '&:focus': {
    //         outline: 'none'
    //     }
    // },
    bmMorphShape: {
        fill: theme.color.veryDarkGrayishBlue
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
        // zIndex: 20
    }
});

function MenuComponent({ children, isMobile }) {
    const theme = useTheme();
    const menuStyles = getMenuStyles({ theme });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu
            isOpen={!isMobile || isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc
            styles={menuStyles}
            onStateChange={(state) => setIsOpen(state.isOpen)}
        >
            {children}
        </Menu>
    );
}

export default MenuComponent;
