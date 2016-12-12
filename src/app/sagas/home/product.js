import { call, put, fork} from "redux-saga/effects";
import { takeLatest, takeEvery } from "redux-saga";
import axios from 'axios';
import { LOAD_PRODUCT_CARDS, LOAD_PRODUCT_CARDS_SUCCESS, LOAD_PRODUCT_CARDS_FAIL } from './../../actions/home/index.js';
import { getProductCards } from './../../api/home/product.js';
 
export function* fetchProductCards(action){
    //console.log("fetchProductCards")
    const response = yield call(getProductCards, action);
    yield put({type: LOAD_PRODUCT_CARDS_SUCCESS, response});
//     if (response.error != null) {
//             yield put({type: LOAD_PRODUCT_CARDS_SUCCESS, response});
//     } else {
//             yield put({type: LOAD_PRODUCT_CARDS_FAIL, response});
//     }
} 