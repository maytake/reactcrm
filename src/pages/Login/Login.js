import React from 'react';
import Login from 'ant-design-pro/lib/Login';
import styles from './Login.less';
import { Alert, Checkbox } from 'antd';
import {loginIn} from '../../services/api';


const {  UserName, Password, Submit } = Login;

class LoginPage extends React.Component {
  state = {
    notice: '',
    submitting: false,
    autoLogin: true,
  }
  onSubmit = (err, values) => {
    //console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
    this.setState({
      submitting:false,
      notice: '',
    }, () => {
      if (!err && (values.username !== 'admin' || values.password !== '888888')) {
        loginIn().then((data)=>{
          console.log(data)
          this.setState({
            submitting:false,
            notice: '账户或密码错误!',
          });
        })
      }

    });
    
  }

  changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }
  render() {
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={this.state.type}
          onTabChange={this.onTabChange}
          onSubmit={this.onSubmit}
        >
        
          {
            this.state.notice &&
            <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
          }
          <UserName name="username" />
          <Password name="password" />

          <div>
       
            <div>
            <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
              自动登录
            </Checkbox>
            <a style={{ float: 'right' }} href="">
              忘记密码
            </a>
          </div>
          </div>
          <Submit loading={this.state.submitting}>登录</Submit>
   
        </Login>
      </div>
    );
  }
}

export default LoginPage