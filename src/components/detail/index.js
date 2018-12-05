import React ,{ Component } from "react"
import css from './index.module.scss'
import './index.module.scss'
import { connect } from 'react-redux'
import action from './action'
import { Carousel, WingBlank } from 'antd-mobile';
class home extends Component{

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render(){
		return <div>
		{this.props.list.data?
		<div>
			<div className={css.header}>
				<a herf="#">返回</a>
				<span>商品介绍</span>
				<a herf="#">分享</a>
			</div>
				<WingBlank>
					<Carousel
						autoplay={true}
						dots
						autoplayInterval={500}
						infinite
					>
						{this.props.list.data.InnerData.Headers.map((val,index) => (
						<a
						key={val}
						href="javascript:;"
						style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
						>
						<img	
							src={val.ImageUrl}
							alt=""
							key={index}
							style={{ width: '100%', verticalAlign: 'top' }}
							onLoad={() => {
							// fire window resize event to change height
							window.dispatchEvent(new Event('resize'));
							this.setState({ imgHeight: 'auto' });
							}}
						/>
						</a>
						))}
					</Carousel>
				</WingBlank>
			<p className={css.titleName}>{this.props.list.data.InnerData.Name}</p>
			<p className={css.titleMse}>{this.props.list.data.InnerData.Caption}</p>
			<p className={css.pir}>￥{this.props.list.data.InnerData.SalePrice}</p>
			
		</div>
		:null}
		</div>
	}

	componentDidMount(){
		this.props.footBarHidden();
		this.props.dataListAxios();
		this.props.deliverGoods();
	}

	componentWillUnmount() {
		this.props.footBarShow();
	}
}

export default connect((res)=>{
	console.log(res)
	return {
		list: res.detailList,
		message: res.deliverGoods
	}
},
	action
)(home)