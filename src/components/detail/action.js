import axios from 'axios';
const action = {
    footBarHidden() {
        return {
            type: 'footBarHidden',
            payload: false
        }
    },
    footBarShow() {
        return {
            type: 'footBarShow',
            payload: true
        }
    },
    dataListAxios(){
        console.log(this.props.match.params.id)
        return axios({
            url: '/1.0/v_h5_5.1.2_33/items/itemview?Iteminfoid=30948&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true'
        }).then((res)=>{
            // console.log(res)
            return {
                type: 'dataListAxios',
                payload: res
            }
        })
    },
    
    deliverGoods(){
        return axios({
            url: '/1.0/v_h5_5.1.2_33/usercenters/deliver?itemInfoId=30948&regionId=25&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true'
        }).then((res)=>{
            console.log(res);
            return {
                type: 'deliverGoods',
                payload: res
            }
        })
    }
}
export default action;