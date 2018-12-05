import React ,{ Component } from "react";
import css from "./index.module.scss";
import "./index.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux';
import {Toast} from 'antd-mobile'

class Login extends Component{
	render(){
		return <div className={css.login}>
			<div className={css.logLogo}>
				<NavLink to="accountcenter" className={css.return}>
					<span className={css.arrow}></span>
				</NavLink>
				<img src="data:image/png;base64,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"/>	
			</div>
			<div className={css.loginMain}>
				<div className={css.word}>
					<h1>老用户登录</h1>
					<div className={css.formLog}>
						<input type="tel" placeholder="请输入手机号" required className={css.write} ref="phone" />
						<input type="password" placeholder="请输入登录密码" required className={css.write} ref="password" />
						<NavLink to="/login" className={css.forget}>忘记密码</NavLink>
					</div>
					<div className={css.button}>
						<button className={css.butLogin} onClick={this.handleClick.bind(this)} >登录</button>
						<NavLink to="/register" className={css.butRegister}>注册</NavLink>
					</div>
				</div>
			</div>
		</div>
	}
	componentDidMount(){
			this.props.footBarHide();
	}
		componentWillUnmount(){
			this.props.footBarShow();
	}

	handleClick(){
		console.log('login');
		axios.post('/api/login',{
			phone:this.refs.phone.value,
			password:this.refs.password.value
		}).then(res=>{
			console.log(res.data.state)
			if(res.data.state === 0){
				Toast.info('手机号不存在',2);
			} else if(res.data.state === 2) {
				Toast.success('登录成功',1)
				this.props.history.push('/accountcenter');
			} else {
				Toast.fail('手机号码或密码不正确',2)
			}
		})
	}
}


export default connect(null,{
	footBarHide(){
		return{
			type:'footBarHidden',
			payload:false
		}
	},
	footBarShow(){
		return{
			type:'footBarShow',
			payload:true
		}
	}
})(Login)



