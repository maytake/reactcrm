import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout.js';
import User from '../pages/User';
import King from '../pages/King';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Admin from '../layouts/BasicLayout';
import E403 from '../pages/Exception/403';
import E404 from '../pages/Exception/404';
import E500 from '../pages/Exception/500';

export default class ERouter extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact component={UserLayout} />
                    <Route path="/" render={() => (
                        <Admin>
                            <Switch>
                                <Route path='/user' component={User} />
                                <Route path='/home/analysis' component={King} />
                                <Route path='/home/monitor' component={Home} />
                                <Route path='/home/workplace' component={Detail} />

                                <Route path='/form/basic-form' component={King} />
                                <Route path='/form/step-form' component={Home} />
                                <Route path='/form/:orderId' component={Detail} />

                                <Route path='/exception/403' component={E403} />
                                <Route path='/exception/404' component={E404} />
                                <Route path='/exception/500' component={E500} />
                                <Redirect to="/user" />
                            </Switch>
                        </Admin>
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }

}