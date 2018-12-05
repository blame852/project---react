import React ,{ Component } from "react"
import {NavLink} from "react-router-dom"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Home2 from './home2/index'
import'./index.scss'
import {connect}from 'react-redux'
import axios from 'axios'

class home extends Component{
	constructor(props){
		super(props)
		this.state={
			dataList:[]
		}
	}
	render(){
		return <div id="home1">
          	<div className="swiper-container">
          	    {this.state.dataList.length?
          	    	<div className="swiper-wrapper">
		      	    	{this.state.dataList.map((item,idx)=>{
		      	    		switch(item.Code){
		      	    			case 'home':
		      	    			return <div className="swiper-slide"><NavLink to="/home/home2" replace >{item.Name}</NavLink></div>
		      	    			case 'newArrival':
		      	    			return <div className="swiper-slide"><NavLink to="/home/newproducts" replace >{item.Name}</NavLink></div>
		      	    			case 'mainCategory':
		      	    			return <div className="swiper-slide"><NavLink to={`/home/channel/${item.ItemIndexId}`} replace >{item.Name}</NavLink></div>
		      	    			case 'webpage':
		      	    			return <div className="swiper-slide"></div>
		      	    			default:
		      	    			return 
		      	    		}
		      	    	})}
          	    	</div>:null
          	    }
          	  </div>
          	  {this.props.children}
		</div>
	}
  componentWillMount(){
    this.props.aaa()
  }
	componentDidMount(){
		    
        axios.get('/1.0/v_h5_5.1.2_33/contents/NavgitaionCategories?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
        .then(res=>
        	{
        		console.log(res.data.InnerData.IndexNav)
        		this.setState({
        			dataList:res.data.InnerData.IndexNav
        		},
        		()=>{
        			var swiper = new Swiper('.swiper-container', {
        			    slidesPerView: 3,
        			    spaceBetween: 30,
        			    pagination: {
        			      	el: '.swiper-pagination',
        			      	clickable: true,
        			    },
        			});
        		})
        	}
    	)
  }
}
export default connect(null,{
  aaa(){
    return {
      type:'footBarColor',
      payload:'home'
    }
  }
})(home)