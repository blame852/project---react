import{ HashRouter as Router , Route ,Switch,Redirect } from "react-router-dom"
import App from "../App"
import React from "react"
import Home from "../components/home/index.js"
import Home2 from "../components/home/home2"
import Wandering from "../components/wandering"
import ShoppingCart from "../components/ShoppingCart"
import AccountCenter from "../components/AccountCenter"
import Allproducts from "../components/AllProducts"
import BathShower from "../components/home/BathShower"
import Bedding from "../components/home/bedding"
import HomeClose from "../components/home/HomeClose"
import Detail from "../components/detail"
import HouseWork from "../components/home/Housework"
import Kitchen from "../components/home/Kitchen"
import Life from "../components/home/life"
import NewProducts from "../components/home/NewProducts"
import { Provider } from 'react-redux'
import Store from '../store/index'
const router = <Provider store = {Store}>
<Router>
    <App>
       <Switch>
       <Route path="/home" render={()=>
          <Home>
                  <Switch>
                         <Route path="/home/home2" component={Home2}/>
                         <Route path="/home/bathshower" component={BathShower}/>
                         <Route path="/home/bedding" component={Bedding}/>
                         <Route path="/home/homeclose" component={HomeClose}/>
                         <Route path="/home/housework" component={HouseWork}/>
                         <Route path="/home/kitchen" component={Kitchen}/>
                         <Route path="/home/life" component={Life}/>
                         <Route path="/home/newproducts" component={NewProducts}/>
                         <Redirect from="/home" to="/home/home2"/> 
                  </Switch>
          </Home>
       }/>
       <Route path="/detail/:id" component={Detail} />
       <Route path="/wandering" component={Wandering}/>
       <Route path="/shoppingcart" component={ShoppingCart}/>
       <Route path="/accountcenter" component={AccountCenter}/>
       <Route path="/allproducts" component={Allproducts}/>
       <Redirect from="/" to="/home"/>      
       </Switch>
    </App>
</Router>

</Provider>
export default router;
