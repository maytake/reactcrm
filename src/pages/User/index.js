import React from 'react';
import { Cascader } from 'antd';
import { Route,Switch } from 'react-router-dom';
import { Pagination } from 'antd';
import King from '../King';
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }];
  
  function onChange(value) {
    console.log(value);
  }
class User extends React.Component {
    render() {
        return (
            <div>
             
              <Pagination simple defaultCurrent={2} total={50} />
               <Cascader options={options} onChange={onChange} placeholder="Please select" />
               <Switch>
                <Route path="/king" exact component={King} />
              </Switch>
            </div>
        )
    }

}


export default User