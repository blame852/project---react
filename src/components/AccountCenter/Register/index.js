import React ,{ Component } from "react";
import css from "./index.module.scss";

import {NavLink} from "react-router-dom";
import axios from "axios";

class Register extends Component{
	render(){
		return <div className={css.register}>
			
					<header>
						<NavLink to="/accountcenter" className={css.goback}>go back</NavLink>
					</header>

			   </div>
	}
}

export default Register

