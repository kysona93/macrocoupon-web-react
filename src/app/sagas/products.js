import { call, put } from 'redux-saga/effects';
import { getProducts } from './../api/products';

export function* fetchAllProducts(){
    const products = yield call(getProducts);
    if (products.error) {
        yield put({type: 'PRODUCTS_FETCH_FAIL', products: products});
    } else {
        yield put({type: 'PRODUCTS_FETCH_SUCCESS', products: products});
    }
}
