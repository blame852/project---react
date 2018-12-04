import React ,{ Component } from "react"
import  "./index.module.scss"
import css from "./index.module.scss"
import axios from "axios"
class AllProducts extends Component{
	constructor(props){
          super(props)
          this.state = {
          	  isShow:false,
          	  datalist:[]
          }
    }
	render(){
		return <div>
            <div className={css.div}>
                 <span>全部产品</span>
            </div>

            <div className={this.state.isShow?css.div2:css.div1}>
                 <i className="iconfont icon-search"></i>
                 <input type="text" placeholder="搜索商品" onClick={this.handleClick.bind(this)}/>
                 {
                  this.state.isShow?
                   <span onClick={this.del.bind(this)}>取消</span>
                   :null
                 }
            </div>

            <div className={css.div3}>
               {
               	this.state.datalist.map(item=>{
               		return <div key={item.ItemIndexId}>
                         <div className={css.name}>{item.Name}</div>
                         <ul>
                         {
                         	item.Children.map(item1=>{
                                      return <li key={item1.ItemIndexId}>
                         		          <img src={"http://i.lifevccdn.com"+item1.Icon} alt="" />
                         		          <div>{item1.Name}</div>
                                     </li>  
                         		
                         	})
                         }
                         </ul>
               		  
               		</div>
               	})
               }
            </div>
		</div>
	}
	handleClick(){
        this.setState({
          	   isShow:true
        })
	}
	del(){
		this.setState({
			  isShow:false
		})
	}
	componentDidMount(){
         axios({
         	url:'/1.0/v_h5_5.1.2_33/categories/allCategory?o=http%3A%2F%2Fm.lifevc.com&NewCartVersion=true'
         }).then(res=>{
         	 this.setState({
         	 	 datalist:res.data.InnerData
         	 })
         	 console.log(this.state.datalist)
         })
         	
	}
}
export default AllProducts