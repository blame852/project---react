import React ,{ Component } from "react"
import  "./index.module.scss"
import css from "./index.module.scss"
import axios from "axios"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
class channelsub extends Component{
	  	constructor(props){
	            super(props)
	            this.state = {
	            	  datalist:['新品','畅销','价格'],
	            	  current:0,
	            	  list:[0,1,3]
	            }
	      }
	  render(){
	  	 return <div className="div">
              <ul className={css.ul}>
                  <li className={css.li}>
                      <i className="iconfont icon-back" onClick={this.back.bind(this)}></i>
                      <span>家务</span>
                  </li>
                  <li className={css.li1}>
                        {
                        	this.state.datalist.map((item,index)=>{
                        		return <span key={index} onClick={this.click.bind(this,index)} className={this.state.current === index?css.name:''}>
                                       {item}
                        		</span>
                        	})
                        }
                  </li>
              </ul>
              <ul className="ull">
                  {
                  	this.props.list.map((item,index)=>{
                  		return <NavLink  key={index} to={"/detail/" + item.ItemInfoId}><li className = {css.li2}>
                            <img src={"http://i.lifevccdn.com"+ item.ImageUrl} alt=""/>
                            <div className="div">
                            <div>{item.Name}</div>
                            <span>￥{item.SalePrice}</span>
                            <span>评论:{item.CommentCount}</span>
                            </div>
                            </li></NavLink>
                  	})
                  }
              </ul>
	  	 </div>
	  }
	  componentDidMount(){
	  
	  }
	  componentWillMount(){
	  	   this.props.aa()
	  	   this.props.qingqiu(this.props.match.params.id,this.props.match.params.i,this.state.list[0])
	  }
	  componentWillUnmount(){
	                  	  
           this.props.bb()
	  }
	  back(){
	  	  this.props.history.push('/allproducts')
	  }
      click(index){
          this.setState({
          	  current:index
          })
          this.props.qingqiu(this.props.match.params.id,this.props.match.params.i,this.state.list[index])
      }   
}
export default connect(state=>{
	 return {
	 	 list:state.channelsub
	 }
},{
	aa(){
		return {
			type:"footBarHidden",
			payload:false
		}
	},
	bb(){
		return {
			type:"footBarShow",
			payload:true
		}
	},
	qingqiu(id,i,index){
	  return axios({
			   url:`/1.0/v_h5_5.1.2_33/Categories/Category?itemindexid=${id}&filter=${i}&sort=${index}&o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true`
		}).then(res=>{
		     
		     return {
		     	 type:'imgShow',
		     	 payload:res.data.InnerData.GoodsItems
		     }	  
		})
	}
})(channelsub)