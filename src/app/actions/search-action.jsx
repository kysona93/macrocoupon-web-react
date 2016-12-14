export const PRODUCTS_SEARCH_FETCH_SUCCESS ="PRODUCTS_SEARCH_FETCH_SUCCESS";
export const PRODUCTS_SEARCH_FETCH_FAIL ="PRODUCTS_SEARCH_FETCH_FAIL";

export function productSearchFetchSuccess(products) {
    return {
            type: PRODUCTS_SEARCH_FETCH_SUCCESS,
            payload:products
        }
    }

export function productSarchFetchFail(products) {
    return {
        type: PRODUCTS_SEARCH_FETCH_FAIL,
        payload: products
    }
}
