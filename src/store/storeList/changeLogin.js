const changeLogin = (prevState=false,action=[])=>{
	let {type,payload} = action;
	switch(type) {
		case 'changeLogin' :
		return payload;
		default :
		return prevState;
	}
}

export default changeLogin;