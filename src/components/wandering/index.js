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
          <ul>
          	{
          		this.state.datalist.map(item=>
          			item.ImageUrl?
          			<li key={item.ItemInfoID} onClick={this.handleClick.bind(this,item.ItemInfoID)}>
          				<img src={`http://i.lifevccdn.com/${item.ImageUrl}`}/>
          				<h4>{item.Name}</h4>
          				<span className={css.price}>￥
          					<span className={css.money}>{item.SalePrice}</span>
          				</span>
          				<span className={css.sale}>月销
          					<span className={css.num}>{item.SaleQty}</span>
          				</span>
          			</li>:
          			null
          		)
          	}
          </ul>
		</div>
	}

	handleClick(id){
		console.log(this.props);
		{
			// this.props.history.push(`/detail/`id)
		}
	}



}
export default wandering