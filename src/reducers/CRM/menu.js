
import {getMenu} from '../../services/api'
const MENU = "MENU"
const ERROR_MSG = 'ERROR_MSG'
const initState = {
	menu: {},
}

export  function reducerMenu(state=initState, action){
	switch(action.type){
		case MENU:
			return {...state, menu:action.payload}
		case ERROR_MSG:
			return {...state,  msg:action.msg}
		default:
			return state
	}
}

function actMenu(data){
	return {type: MENU, payload:data}
}

function errorMsg(msg){
	return {type:ERROR_MSG, msg }
}

export function getMenuData(data){
	return dispatch=>{
		getMenu().then(res=>{
				if (res.status===200&&res.resultCode===0) {
					dispatch(actMenu(res.resultData))
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}

