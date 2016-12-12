import { takeLatest, takeEvery } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchAllProducts } from './products';
import { fetchProductCards } from './home/product.js';
import { LOAD_PRODUCT_CARDS } from './../actions/home/index.js';

// main saga generators
export function* sagas() {   
    //console.log("root saga");
    yield [
        fork(takeLatest, 'PRODUCTS_SEARCH_LIST', fetchAllProducts),
        fork(takeEvery, LOAD_PRODUCT_CARDS, fetchProductCards)
    ];
}