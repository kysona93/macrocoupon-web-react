import { call, put, fork} from "redux-saga/effects";
import { takeLatest, takeEvery } from "redux-saga";
import axios from 'axios';
import { PRODUCTS_SEARCH_FETCH_SUCCESS,PRODUCTS_SEARCH_FETCH_FAIL } from './../../actions/search-action.jsx';
import { getProductSearch } from './../../api/api-search-products.jsx';

export function* fetchProductSearch(product_name){

    const response = yield call(getProductSearch, product_name);
    yield put({type: PRODUCTS_SEARCH_FETCH_SUCCESS, response});
     if (response.error != null) {
             yield put({type: PRODUCTS_SEARCH_FETCH_SUCCESS, response});
     } else {
             yield put({type: PRODUCTS_SEARCH_FETCH_FAIL, response});
     }
}