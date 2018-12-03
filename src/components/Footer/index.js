import React , {Component} from "react"
import {NavLink} from "react-router-dom" 
import  "./index.module.scss"
import css from "./index.module.scss"
class Footer extends Component{
    constructor(props){
          super(props)
    }
    render(){
    	return <footer>
    	     <ul>
    	        <li>
                  <NavLink to="/home" replace activeClassName={css.active}>
    	          <i className="iconfont icon-store"></i>
    	          首页
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/allproducts" replace activeClassName={css.active}>
    	          <i className="iconfont icon-category"></i>
    	           全部产品
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/wandering" replace activeClassName={css.active}>
    	          <i className="iconfont icon-success"></i>
    	           闲逛
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/shoppingcart" replace activeClassName={css.active}>
    	          <i className="iconfont icon-cart"></i>
    	           购物车
    	          </NavLink>
    	          </li>
    	          <li>
                  <NavLink to="/accountcenter" replace activeClassName={css.active}>
    	          <i className="iconfont icon-account"></i>
    	           账户中心
    	          </NavLink>
    	          </li>
    	     </ul>
    	</footer> 
    }
}
export default Footer