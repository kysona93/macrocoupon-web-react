import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { products, productCards } from './products/products.js';
import { reducer as formReducer } from 'redux-form';

// main reducers
export const reducers = combineReducers({
   routing: routerReducer,
   form: formReducer,
   products: products,
   productcards: productCards 
});