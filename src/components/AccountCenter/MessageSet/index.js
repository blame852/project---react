import React ,{ Component } from "react";
import css from "./index.module.scss";

import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import {Toast} from 'antd-mobile'

class MessageSet extends Component{

	constructor(p){
		super(p);
		this.state={

		}
	}
	render(){
		return <div className={css.set}>
					<header>
						<h1>设置</h1>
						<span onClick={this.handleClick.bind(this)} className="iconfont icon-back"></span>
					</header>
					<div className={css.main}>
						<ul>
							<li>
								<p>清理缓存</p>
								<span className="iconfont icon-more"></span>
							</li>
							<li>
								<p>关于LifeVC</p>
								<span className="iconfont icon-more"></span>
							</li>
						</ul>
						<button onClick={this.logout.bind(this)}>退出当前账号</button>
					</div>
			   </div>
	}

	handleClick(){
		this.props.history.push('/accountcenter');
	}

	logout(){
		console.log(1111);
		axios.get('/api/logout').then((res)=>{
			this.props.history.push('/accountcenter');
		})
	}

}

export default MessageSet

