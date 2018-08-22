import React from 'react'
import { Route,Switch } from 'react-router-dom'

import Home from './Home'

class Dashboard extends React.Component {

    render() {
        return (
        <div>
           <div>主页面</div>
           <Switch>
              <Route path='/home' component={Home}></Route>
            </Switch>
        </div>  
        )
    }
}



export default Dashboard