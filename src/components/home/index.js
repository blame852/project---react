import React ,{ Component } from "react"
import {NavLink} from "react-router-dom"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class home extends Component{
	render(){
		return <div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><NavLink replace to="/home/home">首页</NavLink></div>
              <div className="swiper-slide"><NavLink replace to="/home/newproducts">新品</NavLink></div>
              <div className="swiper-slide"><NavLink replace to="/home/housework">家务</NavLink></div>
              <div className="swiper-slide"><NavLink replace to="/home/kitchen">下厨</NavLink></div>
              <div className="swiper-slide"><NavLink replace to="/home/life">生活</NavLink></div>
              <div className="swiper-slide"><NavLink replace to="/home/homeclose">家居服</NavLink></div>
              <div className="swiper-slide"><NavLink replace to="/home/bedding">床品</NavLink></div>
              <div className="swiper-slide"><NavLink replace to="/home/bathshower">洗漱沐浴</NavLink></div>
              <div className="swiper-slide">了解LifeVC</div>
            </div>
            
          </div>
             {this.props.children}
		</div>
	}
	componentDidMount(){
		    new Swiper('.swiper-container', {
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