import React from 'react';
import {withRouter} from 'react-router-dom';
import Login from 'ant-design-pro/lib/Login';
import styles from './Login.less';
import { Alert, Checkbox } from 'antd';
import {loginIn} from '../../services/api';


const USER_TOKEN = 'USER_TOKEN';
const { UserName, Password, Submit } = Login;
@withRouter
class LoginPage extends React.Component {
  state = {
    submitting: false,
    notice:'',
    autoLogin: true,
  }

  componentDidMount() {
    if (localStorage.getItem(USER_TOKEN)){
      this.props.history.push('/user');
    }
  }
  
 
  onSubmit = (err, values) => {
    
    let params ={ ...values, autoLogin: this.state.autoLogin };
    if (!err) {
      this.setState({
        submitting:true
      });
      loginIn(params).then((data)=>{
        this.setState({
          submitting:false
        });
        if(data.resultCode===0){
          localStorage.setItem(USER_TOKEN,data.resultData)
          this.props.history.push('/user');
        }else{
          this.setState({
            notice:'用户名或者密码错误'
          }) 
        }
      })
    }
    
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