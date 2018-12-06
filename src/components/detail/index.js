import React ,{ Component } from "react"
import css from './index.module.scss'
import './index.module.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import action from './action'
import { Carousel, WingBlank } from 'antd-mobile';
import { Radio } from 'antd';
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class home extends Component{

	constructor(props) {
		super(props);
		this.state = {
			Gender : null,
			Style: null,
			Size: null,
			Index: 0,
			size: 'large',
			const: 1
		}
	}

	render(){
		return <div style={{'backgroundColor':'#fff','paddingTop':'40px'}}>
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
						style={{ display: 'inline-block', width: '100%' }}
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
			<div className={css.smile}>
				<div >
					{
						this.props.list.data.InnerData.GroupAttrs.props.map((items, index)=>
							<RadioGroup key={items.pid} onChange={this.onChange.bind(this)} style={{
								'width':'100%',
								'marginBottom':'20px',
								'padding':'10px'
							}}>
							<p style={{
								'fontSize':'14px',
								'color':'#444',
								'width':'100%',
								'marginBottom':'10px'
							}}>{items.pname}</p>
							{items.vals.map((i,j)=>
								<RadioButton key={i.vid} moor={index} value={i.vname} checked={ (this.state.Index === 0 && j === 0) ? true : false }>{i.vname}</RadioButton>
							)}
							</RadioGroup>
						)
					}
				</div>
			</div>
			<div className={css.smilee}>
				<div className={css.const}>
					<span>数量</span>
					<button onClick={this.clij.bind(this)}>-</button>
					<span className={css.cons}>{this.state.const}</span>
					<button onClick={this.cliz.bind(this)}>+</button>
				</div>
				<div className={css.more}>
					<p className={css.moreText}>还有更多可选</p>
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{this.props.list.data.InnerData.BuyWith.map(item=>{
							return	<div className="swiper-slide">
										
											<img onClick={this.imgBan.bind(this,item.ItemInfoId)} style={{'width':'118px'}} key={item} alt="" src={item.ImageUrl} />
										
									</div>
									})
							}
						</div>
					</div>

				</div>
			</div>
			<div className={css.btnbottom}>
				<span>首页</span>
				<span>购物车</span>
				<span>加入购物车</span>
			</div>
		</div>
		:null}
		</div>
	}

	imgBan(id){
		this.props.history.push(`/detail/${id}`);
		window.location.reload(true);
	}

	clij(){
		if (this.state.const === 1){return}
		var von = this.state.const;
		von--
		console.log(von)
		this.setState({
			const: von
		})
	}

	cliz(){
		var von = this.state.const;
		von++
		// console.log(von)
		this.setState({
			const: von
		})
	}

	onChange(e) {
		if (e.target.moor === 0) {
			this.setState({
				Gender: e.target.value,
				Index : 1
			})
		}
		if (e.target.moor === 1) {
			this.setState({
				Style: e.target.value,
				Index : 1
			})
		}
		if (e.target.moor === 2) {
			this.setState({
				Size: e.target.value,
				Index : 1
			})
		}
		
		// console.log(e.target);
		// this.jj(e.target.moor, e.target.value)
		
	}

	// jj(moor, value){
	// 	console.log(moor, value)
	// 	if(moor === 0){
	// 		this.setState({
	// 			Gender: value
	// 		})
	// 	}
	// 	if (moor === 1) {
	// 		this.setState({
	// 			Style: value
	// 		})
	// 	}
	// 	if (moor === 2) {
	// 		this.setState({
	// 			Size: value
	// 		})
	// 	}
	// 	return
	// }

	componentDidUpdate(){
		new Swiper('.swiper-container', {
			slidesPerView: 3,
			spaceBetween: 30,
			freeMode: true,
			pagination: {
				clickable: true,
			},
		});
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