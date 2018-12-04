import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import footBar from './storeList/footBar';
import thunkMid from 'redux-thunk';
import promiseMid from 'redux-promise';

const Reducer = combineReducers({
    footBar
})

let cmposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(Reducer, cmposeEnhancers(
    applyMiddleware(thunkMid, promiseMid)
));

export default store;