const detail = (preState=[], action=[])=>{
    let { type, payload } = action;

    switch(type){
        case 'dataListAxios':
        return payload;
        default:
        return preState;
    }
}
export default detail;