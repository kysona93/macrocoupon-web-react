import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import products from './products';
import productCards from './home/product_card.js';
import { reducer as formReducer } from 'redux-form';
// main reducers
export const reducers = combineReducers({
   routing: routerReducer,
   form: formReducer,
   products: products,
   productcards: productCards
});