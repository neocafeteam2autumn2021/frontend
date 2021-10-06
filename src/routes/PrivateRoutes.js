import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';
import OrdersComponent from './orders/OrdersComponent';
import ProfileComponent from './profile/ProfileComponent';

const MainMenuComponent = lazy(() => import('./menu/MainMenuComponent'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading={false} />}>
            <Switch>
                <Route exact path={SLUGS.menu} component={MainMenuComponent} />
                <Route exact path={SLUGS.orders} component={OrdersComponent} />
                <Route exact path={SLUGS.profile} component={ProfileComponent} />
                <Redirect to={SLUGS.menu} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
