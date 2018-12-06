import React ,{ Component } from "react";
import { connect } from 'react-redux';
class ShoppingCart extends Component{
	render(){
		return <div>
          
		</div>
	}
	componentWillMount(){
		this.props.footBarColor();
	}
}
export default connect(null,{
	footBarColor() {
		return {
			type: "footBarColor",
			payload: "ShoppingCart"
		}
	}
})(ShoppingCart)