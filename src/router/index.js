import{ HashRouter as Router , Route ,Switch,Redirect } from "react-router-dom"
import App from "../App"
import React from "react"
import Home from "../components/home/index.js"
import Home2 from "../components/home/home2"
import Wandering from "../components/wandering"
import ShoppingCart from "../components/ShoppingCart"
import AccountCenter from "../components/AccountCenter"
import Register from '../components/AccountCenter/Register'
import Login from '../components/AccountCenter/Login'
import Allproducts from "../components/AllProducts"
import Detail from "../components/detail"
import Life from "../components/home/life"
import NewProducts from "../components/home/NewProducts"
import { Provider } from 'react-redux'
import Store from '../store/index'
import Channelsub from "../components/channelsub"
const router = <Provider store = {Store}>
<Router>
    <App>
       <Switch>
       <Route path="/home" render={()=>
          <Home>
                  <Switch>
                         <Route path="/home/home2" component={Home2}/>
                         <Route path="/home/newproducts" component={NewProducts}/>
                         <Route path="/home/channel/:id" component={Life}/>
                         <Redirect from="/home" to="/home/home2"/> 
                  </Switch>
          </Home>
       }/>
       <Route path="/detail/:id" component={Detail} />
       <Route path="/wandering" component={Wandering}/>
       <Route path="/shoppingcart" component={ShoppingCart}/>
       <Route path="/accountcenter" component={AccountCenter}/>
       <Route path="/allproducts" component={Allproducts}/>
       <Route path='/register' component={Register} />
       <Route path='/login' component={Login} />
       <Route path="/channelsub/:id/:i" component={Channelsub}/>   
       <Redirect from="/" to="/home"/>   
       </Switch>
    </App>
</Router>

</Provider>
export default router;
