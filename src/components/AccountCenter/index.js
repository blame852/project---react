import React ,{ Component } from "react";
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";

class AccountCenter extends Component{
	constructor(props){
		super(props);
		this.state={
			datalist:[]
		};
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
	// http://app.lifevc.com/1.0/v_h5_5.1.2_33/contents/usercenter?si=&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true
	render(){
		return <div className={css.AccountCenter}>
			<h2>账户中心
				<span className={css.setting}>设置</span>
			</h2>
			<div className={css.topLogin}>
				<div className={css.acctLogin}>
					<span className={css.noLogin}>您还未登录</span>
					<div className={css.button}>
						<span className={css.login}>登录</span>
						<span className={css.line}>|</span>
						<span className={css.register}>注册</span>
					</div>
				</div>
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
export default AccountCenter

