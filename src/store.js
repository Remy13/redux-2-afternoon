import {createStore} from "redux";
import {combineReducers} from "redux";
import {applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise-middleware";
import budgetReducer from "./ducks.js/budgetReducer.js";
import userReducer from "./ducks.js/userReducer.js";
const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware)); 
