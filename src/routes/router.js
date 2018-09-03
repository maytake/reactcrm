import React from 'react';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout.js';
import createHistory from "history/createBrowserHistory"
import User from '../pages/User';
import Admin from '../layouts/BasicLayout';
import Dashboard from '../pages';
import E403 from '../pages/Exception/403';
import E404 from '../pages/Exception/404';
import E500 from '../pages/Exception/500';

export default class ERouter extends React.Component{

    render(){
        let LayoutRouter = (
            <Admin>
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/exception/403' component={E403} />
                    <Route path='/exception/404' component={E404} />
                    <Route path='/exception/500' component={E500} />
                    <Redirect to="/user" />
                </Switch>
            </Admin>
            )

        return (
            <BrowserRouter>
                <div>
                    <Switch>             
                        <Route path="/login" exact component={UserLayout} />
                        <Route path="/" render={props => LayoutRouter}/>         
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}