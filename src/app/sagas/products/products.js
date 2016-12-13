import { call, put } from 'redux-saga/effects';
import { getProducts, getAllProducts, getProductCards } from './../../api/products.js';
import { LOAD_PRODUCT_CARDS, LOAD_PRODUCT_CARDS_SUCCESS, LOAD_PRODUCT_CARDS_FAIL } from './../../actions/products.js';

export function* fetchAllProducts(action){
    const products = yield call(getProducts, action);
    if (products.error) {
        yield put({type: 'PRODUCTS_FETCH_FAIL', products: products});
    } else {
        yield put({type: 'PRODUCTS_FETCH_SUCCESS', products: products});
    }
}

export function* fetchProducts(){
    const products = yield call(getAllProducts);
    if (products.error) {
        yield put({type: 'PRODUCTS_FETCH_FAIL', products: products});
    } else {
        yield put({type: 'PRODUCTS_FETCH_SUCCESS', products: products});
    }
}

/* get product cards with auto scroll content */ 
export function* fetchProductCards(action){
    try{
        const response = yield call(getProductCards, action);
        yield put({type: LOAD_PRODUCT_CARDS_SUCCESS, response});
    }catch(err){
        yield put({type: LOAD_PRODUCT_CARDS_FAIL, response});
    }
} 


