import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import 'ant-design-pro/dist/ant-design-pro.css';
import Router from './routes/router';
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))


ReactDom.render(
	(<Provider store={store}>
		<Router/>
	</Provider>),
	document.getElementById('root')
)