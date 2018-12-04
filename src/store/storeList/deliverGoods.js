const deliverGoods = (preState=[], action=[])=>{
    let { type, payload } = action;

    switch(type){
        case 'deliverGoods':
        return payload;
        default:
        return preState;
    }
}
export default deliverGoods;