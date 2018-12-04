import React ,{ Component } from "react"
import css from './index.module.scss'
import './index.module.scss'
import axios from 'axios'
class home extends Component{
	componentDidMount(){
		axios.get('/1.0/v_h5_5.1.2_33/contents/home_v2?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true')
		.then((res)=>{
			console.log(res.data);
		})
	}
	render(){
		return <div>
          首页<div className={css.aaa}></div>
		</div>
	}

}
export default home