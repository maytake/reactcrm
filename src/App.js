import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './a.scss';
import NProgress from 'nprogress';
import { Button } from 'antd';
import 'ant-design-pro/dist/ant-design-pro.css';

import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from 'antd';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { Icon } from 'antd';



const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
class App extends Component {
  componentDidMount(){
    var dataVal={"username":"112107","password":"123456"}
    
    fetch('/home/member/getmemberlist', {
      credentials: 'include',
      method: 'POST',
      body:JSON.stringify(dataVal),
      mode:'cors',
      cache: 'default',
      timeout: 20000,
      headers: {
          'Content-Type': 'application/json;charset=UTF-8'
      }
 
      
    }).then(res => {
      
    });
    
  }
  state = {
    notice: '',
    type: 'tab2',
    autoLogin: true,
  }
  onSubmit = (err, values) => {
    console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
    if (this.state.type === 'tab1') {
      this.setState({
        notice: '',
      }, () => {
        if (!err && (values.username !== 'admin' || values.password !== '888888')) {
          setTimeout(() => {
            this.setState({
              notice: 'The combination of username and password is incorrect!',
            });
          }, 500);
        }
      });
    }
  }
  onTabChange = (key) => {
    this.setState({
      type: key,
    });
  }
  changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }
  render() {
    return (
      <div>
      <Login
        defaultActiveKey={this.state.type}
        onTabChange={this.onTabChange}
        onSubmit={this.onSubmit}
      >
        <Tab key="tab1" tab="Account">
          {
            this.state.notice &&
            <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
          }
          <UserName name="username" />
          <Password name="password" />
        </Tab>
        <Tab key="tab2" tab="Mobile">
          <Mobile name="mobile" />
          <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
        </Tab>
        <div>
          <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>Keep me logged in</Checkbox>
          <a style={{ float: 'right' }} href="">Forgot password</a>
        </div>
        <Submit>Login</Submit>
        <div>
          Other login methods
          <span className="icon icon-alipay" />
          <span className="icon icon-taobao" />
          <span className="icon icon-weibo" />
          <a style={{ float: 'right' }} href="">Register</a>
        </div>
      </Login>
      
      </div>
    );
  }

        
   
}

export default App;
