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
        // console.log(this.props.match.params.id)
        return axios({
            url: `/1.0/v_h5_5.1.2_33/items/itemview?Iteminfoid=${this.props.match.params.id}&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true`
        }).then((res)=>{
            res.data.InnerData.GroupAttrs.props.map((item,index)=>{
                if(index === 0) {
                    this.setState({
                        Gender: item.vals[0].vname
                    })
                }
                if (index === 1) {
                    this.setState({
                        Style: item.vals[0].vname
                    })
                }
                if (index === 2) {
                    this.setState({
                        Size: item.vals[0].vname
                    })
                }
            })
            console.log(this)
            
            return {
                type: 'dataListAxios',
                payload: res
            }
        })
    },
    
    deliverGoods(){
        return axios({
            url: `/1.0/v_h5_5.1.2_33/usercenters/deliver?itemInfoId=${this.props.match.params.id}&regionId=25&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true`
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