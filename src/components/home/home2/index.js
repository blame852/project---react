import React ,{ Component } from "react"
import './index.scss'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class home extends Component{
	constructor(props){
		super(props)
		this.state = {
			dataList: [],
			currentTime:[]
		} 
	}

	componentDidMount(){
		axios.get('/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
		.then((res)=>{
			console.log(res.data);
			this.setState({
				dataList:res.data.InnerData
			},()=>{
				console.log(this.state.dataList);
				var swiper = new Swiper('.homeSwiper', {
				    pagination: {
				    	el: '.swiper-pagination',
				    },
			    });
			})
		})
	}

	render(){
		return <div id="home2">
			{
				this.state.dataList[0]?
				<div>
					{this.state.dataList.map((item,index)=>{
						switch(item.Type){
							case 'banner':
							return <div className= "homeSwiper swiper-container">
								<div  className="swiper-wrapper">
								{item.InnerData.map((i,idx)=>
									<div className="swiper-slide">
										<img src={`http://i.lifevccdn.com${i.ImageUrl}`} alt=""/>
									</div>
								)}
								</div>
							</div>
							case 'ShortCut_2':
							return <div className="hot"><img src={`http://i.lifevccdn.com${item.InnerData.ImageUrl}`} alt=""/></div>
							case 'CombinationChart':
							return <div className="homeCatagory" key={index}><img src={`http://i.lifevccdn.com${item.InnerData.ImageUrl}`} alt=""/></div>
							default :
							return
						}
						
					})}
				</div>
				:null
			}
		</div>
	}

}
export default home