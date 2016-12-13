import { LOAD_PRODUCT_CARDS_SUCCESS } from './../../actions/products.js';

export function products(state = [{}], action) {
    switch (action.type){
        case 'PRODUCTS_FETCH_SUCCESS':
            console.log(JSON.stringify(action.products));
            return action.products;
        case 'PRODUCTS_FETCH_FAIL':
            return state;
        default:
            return state;
    }
}

/* get product cards with auto scroll content */
export function productCards(state=[{}], action){
    switch(action.type){
        case LOAD_PRODUCT_CARDS_SUCCESS : { 
            console.log("reducer productCards",action.response.data);
            return action.response.data
        }
        default:
            return state; 
    }
}
