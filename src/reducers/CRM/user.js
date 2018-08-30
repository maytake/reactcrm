const CURRENTUSER = "CURRENTUSER"
const initState = {
	currentUser: {},
}

export  function reducerCurrentUser(state=initState, action){
	switch(action.type){
		case CURRENTUSER:
			return {...state, collapsed:action.payload}
		default:
			return state
	}
}

export function saveCurrentUser(data){
	return { 
		type:CURRENTUSER, 
		payload:data
	}
}


