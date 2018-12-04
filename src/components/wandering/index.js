import React ,{ Component } from "react";
import css from "./index.module.scss";
import axios from "axios";

class wandering extends Component{

	constructor(props){
		super(props);
		this.state={
			datalist:[]
		};
	}
	componentDidMount(){
		axios({
			url:"/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=1&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true",
			method: 'get'
			// headers:{
			// 	'X-AspNet-Version':'4.0.30319',
			// 	'X-Powered-By':'lifevc.com'
			// }
		}).then(res=>{
			console.log(res.data);
			this.setState({
				datalist:res.data.InnerData.StrollList
			})
		})
	}

	render(){
		return <div className={css.wandering}>
          <h2>闲逛</h2>
		</div>
	}
}
export default wandering