import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import MainMenuComponent from './menu/MainMenuComponent';
import OrdersComponent from './orders/OrdersComponent';
import ProfileComponent from './profile/ProfileComponent';

function PrivateRoutes() {
    return (
            <Switch>
                <Route exact path={SLUGS.menu} component={MainMenuComponent} />
                <Route exact path={SLUGS.orders} component={OrdersComponent} />
                <Route exact path={SLUGS.profile} component={ProfileComponent} />
                <Redirect to={SLUGS.menu} />
            </Switch>
    );
}

export default PrivateRoutes;
