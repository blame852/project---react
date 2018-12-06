import React ,{ Component } from "react"
import axios from 'axios'

class life extends Component{
	constructor(props){
		super(props)
		this.state={
			Categories:[],
			CEORecommends:[],
			CEORecommendTitle:[],
			FilterItems:[],
			dataList:[],
			id:this.props.match.params.id
		}
	}
	render(){
		return <div>
      	{
          	this.state.Categories[0]?
          	<ul className="Categories">
          		{this.state.Categories.map((item,idx)=>{
          			return <li key={idx}><img src={item.CategoryImageUrl} alt=""/><span>{item.Title}</span></li>
          		})}
          	</ul>
          	:null
        }
        {	
        	this.state.CEORecommends[0]?
          	<ul className="CEORecommends">
          		{this.state.CEORecommends.map((item)=>{
          			return <li key={item.ItemInfoId}><img src={item.ImageUrl} alt=""/><span>{item.Name}</span></li>
          		})}
          	</ul>
          	:null
        }
        {
        	this.state.FilterItems[0]?
          	<ul className="FilterItems">
          		{this.state.FilterItems.map((item,idx)=>{
          			return <li key={idx}><img src={item.ImageUrl} alt=""/><span>{item.Title}</span></li>
          		})}
          	</ul>
          	:null
        }
		</div>
	}
	componentDidMount(){
		console.log(this.props);
		axios.get(`/1.0/v_h5_5.1.2_33/Categories/Category?itemIndexId=${this.state.id}&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true`)
		.then(res=>{
			this.setState({
				dataList:res.data.InnerData,
				Categories:res.data.InnerData.Categories,
				CEORecommends:res.data.InnerData.CEORecommends,
				CEORecommendTitle:res.data.InnerData.CEORecommends,
				FilterItems:res.data.InnerData.CEORecommends
			})
		})
	}
}
export default life