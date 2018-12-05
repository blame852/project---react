const channelsub = (preState=[],action=[])=>{
         let { type, payload } = action;
	     switch(type){
	     	case "imgShow":
	     	return payload;
	     	default :
	     	return preState;
	     } 
} 
export default channelsub 