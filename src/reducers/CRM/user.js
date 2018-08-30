
import {getCurrentUser} from '../../services/api'
const CURRENTUSER = "CURRENTUSER"
const ERROR_MSG = 'ERROR_MSG'
const initState = {
	currentUser: {},
}

export  function reducerCurrentUser(state=initState, action){
	switch(action.type){
		case CURRENTUSER:
			return {...state, currentUser:action.payload}
		case ERROR_MSG:
			return {...state,  msg:action.msg}
		default:
			return state
	}
}

function actCurrentUser(data){
	return {type: CURRENTUSER, payload:data}
}

function errorMsg(msg){
	return {type:ERROR_MSG, msg }
}

export function saveCurrentUser(data){
	return dispatch=>{
		getCurrentUser().then(res=>{
				if (res.status==200&&res.resultCode===0) {
					actCurrentUser(res.resultData)
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}

