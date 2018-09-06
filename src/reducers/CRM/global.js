const COLLAPSED = 'COLLAPSED';
const BREADCRUMB = 'BREADCRUMB';
const initState = {
	collapsed: false,
	breadCrumb:{}
};

export  function reducerGlobal(state=initState, action){
	switch(action.type){
		case COLLAPSED:
			return {...state, collapsed:action.payload}
		case BREADCRUMB:
			return {...state, breadCrumb:action.payload}
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

export function getBreadCrumb(data){
	return { 
		type:BREADCRUMB, 
		payload:data
	}
}
