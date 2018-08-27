

const COLLAPSED = 'COLLAPSED'

const initState = {
	collapsed: false,
	
}

export  function CRM(state=initState, action){
	switch(action.type){
		case COLLAPSED:
			return {...state, collapsed:action.payload}
		default:
			return state
	}
}

export function changeLayoutCollapsed(data){
	return { 
		type:COLLAPSED, 
		payload:data
	}
}


