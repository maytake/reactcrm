

const USER_LIST = 'USER_LIST'

const initState = {
	userlist:[]
}

export default function CRM(state=initState, action){
	switch(action.type){
		case USER_LIST:
			return {...state, userlist:action.payload}
		default:
			return state
	}
}

function userList(data){
	return { type:USER_LIST, payload:data}
}



