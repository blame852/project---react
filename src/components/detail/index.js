import React ,{ Component } from "react"
import css from './index.module.scss'
import './index.module.scss'
import { connect } from 'react-redux'
class home extends Component{
	render(){
		return <div>
          详情页<div className={css.aaa}></div>
		</div>
	}

	componentWillMount(){
		this.props.footBarHidden();
	}

	componentWillUnmount() {
		this.props.footBarShow();
	}
}
export default connect(null, 
	{
		footBarHidden(){
			return {
				type: 'footBarHidden',
				payload: false
			}
		},
		footBarShow(){
			return {
				type: 'footBarShow',
				payload: true
			}
		}
	}
)(home)