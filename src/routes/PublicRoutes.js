import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import InitialPage from './InitialPage';
import LoginComponent from './login/LoginComponent';
import RegistrationComponent from './registration/RegistrationComponent';

function PublicRoutes() {
    return (
        <Switch>
            <Route path={SLUGS.login} component={LoginComponent} />
            <Route path={SLUGS.registry} component={RegistrationComponent} />
            <Route path={SLUGS.init} component={InitialPage} />
            <Redirect to={SLUGS.init} />
        </Switch>
    );
}

export default PublicRoutes;
