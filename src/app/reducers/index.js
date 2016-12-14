import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { products, productCards } from './products/products.js';
import { reducer as formReducer } from 'redux-form';
import productCategory from './products/product_category';
import services from './products/service_category';
// main reducers
export const reducers = combineReducers({
   routing: routerReducer,
   form: formReducer,
   products: products,
   productcards: productCards,
   productCategory:productCategory,
   services:services
});