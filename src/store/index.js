import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import footBar from './storeList/footBar';
import thunkMid from 'redux-thunk';
import promiseMid from 'redux-promise';
import detailList from './storeList/detailList';
import deliverGoods from './storeList/deliverGoods'

const Reducer = combineReducers({
    footBar,
    detailList,
    deliverGoods
})

let cmposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(Reducer, cmposeEnhancers(
    applyMiddleware(thunkMid, promiseMid)
));

export default store;