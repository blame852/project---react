import React ,{ Component } from "react";
import css from "./index.module.scss";
import axios from "axios";
import { connect } from 'react-redux';
import { PullToRefresh, Button } from 'antd-mobile'
import InfiniteScroll from 'react-infinite-scroller'

class wandering extends Component{

	constructor(props){
		super(props);
		this.state={
			// scrollHeight:0 ,
			datalist:[],
			scrollHeight:0,
			hasMore:true,
			pageNum:2
		};
	}
	componentWillMount(){
		this.props.whatFootBarColor();
	}
	componentDidMount(){
		// scrollHeight = window.innerHeight - this.header.clientHeight;
		axios({
			url:"/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=1&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true",
			method: 'get'
		}).then(res=>{
			console.log(res.data);
			this.setState({
				datalist:res.data.InnerData.StrollList,
				// scrollHeight:window.innerHeight - window.clientHeight
			})
		})
	}

	render(){
		const {scrollHeight} = this.state;
		return <div className={css.wandering}>
          <h2 className="header" ref={ref=>this.header}>闲逛</h2>
          <ul>
     
          	<InfiniteScroll
          	    pageStart={0}
          	    loadMore={this.loadFunc.bind(this)}
          	    hasMore={true || false}
          	    loader={<div className="loader" key={0}>Loading ...</div>}
          	    initialLoad={false}
          	    threshold={250}
          	>
          	    {
          	    	this.state.datalist.map((item,index)=>
          	    		item.ImageUrl?
          	    		<li key={index} onClick={this.handleClick.bind(this,index)}>
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
          	</InfiniteScroll>

          </ul>
		</div>
	}

	handleClick(id){
		console.log(this.props);
		{
			// this.props.history.push(`/detail/`id)
		}
	}

	loadFunc(){
		if(this.state.pageNum < 11){
			axios.get(`/1.0/v_h5_5.1.2_33/Stroll/StrollItemList?pageNo=${this.state.pageNum}&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true`).then((res)=>{
				this.setState({
					datalist:[...this.state.datalist,...res.data.InnerData.StrollList],
					pageNum:this.state.pageNum + 1
				})
			})
		}
	}

}





export default connect(null,{
	whatFootBarColor(){
		return {
			type: 'footBarColor',
			payload: 'wandering'
		}
	}
})(wandering)

