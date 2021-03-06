import React ,{ Component } from "react";
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'

class AccountCenter extends Component{
	constructor(props){
		super(props);
		this.state={
			datalist:[]
		};
	}
	componentWillMount(){
		this.props.whatFootBarColor();
		axios.get('/api/login').then(res=>{
			this.props.changeLogin(res.data);
		})
	}

	componentDidMount(){
		axios({
			url:"/1.0/v_h5_5.1.2_33/contents/usercenter?si=&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true",
			method: 'get'
		}).then(res=>{
			console.log(res.data);
			this.setState({
				datalist:res.data.InnerData.CenterMenus
			})
		})
	}

	handleClick(){
		this.props.history.push('/set');
	}

	render(){
		return <div className={css.AccountCenter}>
			<h2>账户中心
				<span className={css.setting} onClick={this.handleClick.bind(this)}>设置</span>
			</h2>
			<div className={css.topLogin}>
				{
					this.props.isLog.user?
					<div className={css.user}>
						<label>
							<img src="./userPhone.png" alt=""/>
							<input type="file"/>
						</label>
						<div className={css.msg}>
							<p>{this.props.isLog.user}</p>
							<p>
								<span>新新会员</span>
								<img src="./rankstar.png" alt=""/>
							</p>
						</div>
					</div>
					:
					<div className={css.acctLogin}>
						<span className={css.noLogin}>您还未登录</span>
						<div className={css.button}>
							<NavLink to="/login" className={css.login}>登录</NavLink>
							<span className={css.line}>|</span>	
							<NavLink to="/register" className={css.register}>注册</NavLink>
						</div>
					</div> 
					
				}
			</div>
			<div className={css.dashOrder}>
				<ul className={css.topDash}>
					<li>
						<NavLink to="/accountcenter" replace>
							<i className="iconfont icon-print"></i>
							<span className={css.word}>待支付</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/accountcenter" replace>
							<i className="iconfont icon-share"></i>
							<span className={css.word}>待发货</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/accountcenter" replace>
							<i className="iconfont icon-machinery"></i>
							<span className={css.word}>待收货</span>
						</NavLink>
					</li>
				</ul>
				<ul className={css.topDash}>
					<li>
						<NavLink to="/accountcenter" replace>
							<i className="iconfont icon-text"></i>
							<span className={css.word}>待评价</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/accountcenter" replace>
							<i className="iconfont icon-copy"></i>
							<span className={css.word}>回复</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/accountcenter" replace>
							<i className="iconfont icon-trade"></i>
							<span className={css.word}>退换货</span>
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={css.order}>
				{
					this.state.datalist.map((item,index)=>
						<ul key={index}>
							{
								item.Menus.map((item1,index1)=>
										<li key={index1}>
											<NavLink to="/accountcenter" replace>
												<img src={`http://i.lifevccdn.com/${item1.Icon}`}/>
												<span className={css.title}>{item1.Title}</span>
												<span className={css.right}></span>
											</NavLink>
										</li>
									)
							}
						</ul>
						)
				}
			</div>
		</div>
	}
}
export default connect(
	(state)=>{
		return{
			isLog:state.changeLogin
		}
	},
	{
		whatFootBarColor(){
			return{
				type:'footBarColor',
				payload:'accountcenter'
			}
		},
		changeLogin(data){
			return{
				type:'changeLogin',
				payload:data
			}
		}
	})(AccountCenter
)
