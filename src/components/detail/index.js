import React ,{ Component } from "react"
import css from './index.module.scss'
import './index.module.scss'
import { connect } from 'react-redux'
import action from './action'
import { Carousel, WingBlank } from 'antd-mobile';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class home extends Component{

	constructor(props) {
		super(props);
		this.state = {
			Gender : null,
			Style: null,
			Size: null
		}
	}

	render(){
		return <div style={{'backgroundColor':'#fff'}}>
		{this.props.list.data?
		<div>
			<div className={css.header}>
				<a herf="#" onClick={this.GoBack.bind(this)}>返回</a>
				<span>商品介绍</span>
				<a herf="#">分享</a>
			</div>
				<WingBlank>
					<Carousel
						autoplay={true}
						dots
						autoplayInterval={2000}
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
			<div className={css.titleMs}>
				<div>
					{
						this.props.list.data.InnerData.GroupAttrs.props.map((items, index)=>
							<RadioGroup key={items.pid} onChange={this.onChange.bind(this)}>
							<p style={{
								'fontSize':'14px',
								'color':'#444'
							}}>{items.pname}</p>
							{items.vals.map((i,j)=>
								<RadioButton key={i.vid} moor={index} value={i.vname} checked={ j === 0 ? true : false }>{i.vname}</RadioButton>
							)}
							</RadioGroup>
						)
					}
				</div>
			</div>
		</div>
		:null}
		</div>
	}

	onChange(e) {
		// console.log(e.target);
		this.jj(e.target.moor, e.target.value)
		
	}

	jj(moor, value){
		console.log(moor, value)
		if(moor === 0){
			this.setState({
				Gender: value
			})
		}
		if (moor === 1) {
			this.setState({
				Style: value
			})
		}
		if (moor === 2) {
			this.setState({
				Size: value
			})
		}
		return
	}

	componentDidUpdate(){
		console.log(this.state);
	}

	componentDidMount(){
		this.props.footBarHidden.apply(this);
		this.props.dataListAxios.apply(this);
		this.props.deliverGoods.apply(this);
	}

	componentWillUnmount() {
		this.props.footBarShow();
	}

	GoBack(){
		window.history.go(-1);
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