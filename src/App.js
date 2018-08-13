import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './a.scss';
import NProgress from 'nprogress';
import { Button } from 'antd';

class App extends Component {
  componentDidMount(){
    var result = fetch('/home/member/getmemberlist', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:{}
    }).then(res => {
      
    });
    
  }
  componentWillUpdate () {
    NProgress.start()
  }

  componentDidUpdate () {
    NProgress.done()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="red"> wonderful</div>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
