import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';

const StatisticsComponent = lazy(() => import('./statistics/StatisticsComponent'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading={false} />}>
            <Switch>
                <Route exact path={SLUGS.statistics} component={StatisticsComponent} />
                <Redirect to={SLUGS.statistics} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
