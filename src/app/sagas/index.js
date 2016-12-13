import { takeEvery, takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchAllProducts, fetchProducts , fetchProductCards} from './products/products.js';
import { LOAD_PRODUCT_CARDS } from './../actions/products.js';

// main saga generators
export function* sagas() { 
    yield [
        fork(takeLatest, 'PRODUCTS_SEARCH_LIST', fetchAllProducts),
        fork(takeLatest, 'HOME_PRODUCTS_LIST', fetchProducts),
        fork(takeEvery, LOAD_PRODUCT_CARDS, fetchProductCards)
    ];
}