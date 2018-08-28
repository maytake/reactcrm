import React from 'react';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout.js';

import User from '../pages/User';
import Admin from '../admin';
import Dashboard from '../pages';
import E403 from '../pages/Exception/403';
import E404 from '../pages/Exception/403';
import E500 from '../pages/Exception/403';

export default class ERouter extends React.Component{

    render(){

        let LayoutRouter = (
            <Admin>
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/exception/403' component={E403} />
                    <Route path='/exception/404' component={E404} />
                    <Route path='/exception/500' component={E500} />
                    <Redirect to="/home" />
                </Switch>
            </Admin>
            )

        return (
            <BrowserRouter>
                <div>
                    <Switch>             
                        <Route path="/login" exact component={UserLayout} />
                        <Route path='/home' component={Dashboard}/>
                        <Route path="/" render={props => LayoutRouter}/>
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}