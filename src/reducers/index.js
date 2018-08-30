import {
	combineReducers
} from 'redux'

import {reducerCollapsed} from './CRM/global'
import {reducerCurrentUser} from './CRM/user'
import {reducerMenu} from './CRM/menu'
//所有监控器的入口
export default combineReducers({
	reducerCollapsed,
	reducerCurrentUser,
	reducerMenu
})