import React from 'react';
import { Route,Switch } from 'react-router-dom';

import King from '../King';

class User extends React.Component {
    render() {
        return (
            <div>
             
              <div>User</div>
            
               <Switch>
                <Route path="/king" exact component={King} />
              </Switch>
            </div>
        )
    }

}


export default User