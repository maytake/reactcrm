import {
	combineReducers
} from 'redux'

import {reducerCollapsed} from './CRM/global.js'
import {reducerCurrentUser} from './CRM/user.js'
//所有监控器的入口
export default combineReducers({
	reducerCollapsed,
	reducerCurrentUser
})