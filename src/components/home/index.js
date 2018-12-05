import React ,{ Component } from "react"
import {NavLink} from "react-router-dom"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Home2 from './home2/index'
import'./index.scss'
class home extends Component{
	render(){
		return <div id="home1">
          <div className="header">
            <div className="image">
            <NavLink className="toAll" replace to="/allproducts"></NavLink>
          </div>
          </div>
          <div className="swiper-container home1Swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/home2" activeClassName="active">首页</NavLink></div>
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/newproducts" activeClassName="active">新品</NavLink></div>
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/housework" activeClassName="active">家务</NavLink></div>
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/kitchen" activeClassName="active">下厨</NavLink></div>
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/life" activeClassName="active">生活</NavLink></div>
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/homeclose" activeClassName="active">家居服</NavLink></div>
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/bedding" activeClassName="active">床品</NavLink></div>
              <div className="swiper-slide home1Slide"><NavLink replace to="/home/bathshower" activeClassName="active">洗漱沐浴</NavLink></div>
              <div className="swiper-slide home1Slide">了解LifeVC</div>
            </div>
            
          </div>
             {this.props.children}
		</div>
	}
	componentDidMount(){
		    new Swiper('.home1Swiper', {
		          slidesPerView: 5,
		          spaceBetween: 30,
		          pagination: {
		            el: '.swiper-pagination',
		            clickable: true,
		          },
		        });
  }
}
export default home