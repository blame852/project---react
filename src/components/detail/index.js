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
			<div className={css.header}>
				<a herf="#">返回</a>
				<span>商品介绍</span>
				<a herf="#">分享</a>
			</div>
			{this.props.list.data?
				<WingBlank>
					<Carousel
						autoplay={true}
						infinite
						beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
						afterChange={index => console.log('slide to', index)}
						dots={true}
					>
						{this.props.list.data.InnerData.Headers.map((val,index) => (
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
						))}
					</Carousel>
				</WingBlank>
				:null
			}
				
			
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