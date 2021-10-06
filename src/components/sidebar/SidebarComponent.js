import React from 'react';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';
import { convertSlugToUrl } from '../../resources/utilities';
import menu_img from '../../assets/images/menu_img.png';
import orders_img from '../../assets/images/orders_img.png';
import profile_img from '../../assets/images/profile_img.png';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';
import NotificationComponent from './NotificationComponent';

function SidebarComponent() {
    const { push } = useHistory();
    const isMobile = window.innerWidth <= 1080;

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 13, paddingBottom: 100, width: 70, display: 'flex', justifyContent: 'center' }}>
                <NotificationComponent />
            </div>
            <MenuItem
                id={SLUGS.menu}
                title='Меню'
                image={menu_img}
                alt={'menu'}
                onClick={() => onClick(SLUGS.menu)}
            />
            <MenuItem
                id={SLUGS.orders}
                title='Заказы'
                image={orders_img}
                alt={'orders'}
                onClick={() => onClick(SLUGS.orders)}
            />
            <MenuItem
                id={SLUGS.profile}
                title='Профиль'
                image={profile_img}
                alt={'profile'}
                onClick={() => onClick(SLUGS.profile)}
            />
        </Menu>
    );
}

export default SidebarComponent;
