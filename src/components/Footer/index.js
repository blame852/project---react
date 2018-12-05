import React , {Component} from "react"
import {NavLink} from "react-router-dom" 
import  "./index.module.scss"
import css from "./index.module.scss"
import { connect } from 'react-redux';
class Footer extends Component{
    constructor(props){
          super(props)

    }

	

    render(){
    	return (
		<footer className={this.props.isShow?null:css.footHidden}>
    	     <ul>
    	        <li>
                  <NavLink to="/home" replace className={this.props.footBarWhatColor === 'home' ? css.active : ''}>
    	          <i className="iconfont icon-store"></i>
    	          首页
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/allproducts" replace className={this.props.footBarWhatColor === 'allproducts' ? css.active : ''}>
    	          <i className="iconfont icon-category"></i>
    	           全部产品
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/wandering" replace className={this.props.footBarWhatColor === 'wandering' ? css.active : ''}>
    	          <i className="iconfont icon-success"></i>
    	           闲逛
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/shoppingcart" replace className={this.props.footBarWhatColor === 'ShoppingCart' ? css.active : ''}>
    	          <i className="iconfont icon-cart"></i>
    	           购物车
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/accountcenter" replace className={this.props.footBarWhatColor === 'accountcenter' ? css.active : ''}>
    	          <i className="iconfont icon-account"></i>
    	           账户中心
    	          </NavLink>
    	          </li>
    	     </ul>
		</footer> 
		)
	}
	
	onClickNav(mag){
		// var arr = document.querySelectorAll('footer ul li a');
		// arr.forEach(item=>{
		// 	item.className = ''
		// })
		// var nn = mag.target;
		// console.log(nn)
		// nn.className = css.active;
	}
}
export default connect(
	(state)=>{
		console.log(state)
		return {
			isShow: state.footBar,
			footBarWhatColor: state.footBarWhatColor
		}
	}
)(Footer)