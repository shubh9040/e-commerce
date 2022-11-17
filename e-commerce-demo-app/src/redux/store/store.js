import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { productListReducer } from "../reducers/productListReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer  from "../reducers/counterReducer";

// const initialState = {

// };

const reducers = combineReducers({
    productList: productListReducer,
    counterReducer: counterReducer
})

const middleware = [thunk]

const store = configureStore({reducer:reducers}, composeWithDevTools(applyMiddleware(...middleware)))

export default store;