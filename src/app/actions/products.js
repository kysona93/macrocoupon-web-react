export const LOAD_PRODUCT_CARDS="LOAD_PRODUCT_CARDS";
export const LOAD_PRODUCT_CARDS_SUCCESS = "LOAD_PRODUCT_CARDS_SUCCESS";
export const LOAD_PRODUCT_CARDS_FAIL = "LOAD_PRODUCT_CARDS_FAIL";

export function productsFetchSuccess(products) {
    return {
        type: 'PRODUCTS_FETCH_SUCCESS',
        products
    } 
}

export function productsFetchFail(products) {
    return {
        type: 'PRODUCTS_FETCH_FAIL',
        products
    }
}

/* get product cards to display auto scroll content */
export function loadProductCards(limit){
    return { 
        type: LOAD_PRODUCT_CARDS,
        limit: limit
    } 
}
