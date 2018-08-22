import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import UserLayout from './layouts/UserLayout.js'
import User from './pages/User'
import Loginx from './pages/Login/Login'
import Dashboard from './pages'
import reducers from './reducers'
import 'ant-design-pro/dist/ant-design-pro.css';

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))


// boss genius me msg 4个页面
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				
				<Switch>
					
					<Route path="/user" exact component={UserLayout} />
					<Route path='/login' exact component={Loginx}></Route>
					<Route path='/home' component={Dashboard}></Route>
					<Redirect to="/home" />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)