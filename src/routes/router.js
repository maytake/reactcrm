import React from 'react';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout.js';

import User from '../pages/User';
import Admin from '../admin';
import Dashboard from '../pages';

export default class ERouter extends React.Component{

    render(){

        let LayoutRouter = (
            <Admin>
                <Switch>
                    <Route path='/user' component={User} />
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