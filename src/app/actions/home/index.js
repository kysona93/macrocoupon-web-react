export const LOAD_PRODUCT_CARDS="LOAD_PRODUCT_CARDS";
export const LOAD_PRODUCT_CARDS_SUCCESS = "LOAD_PRODUCT_CARDS_SUCCESS";
export const LOAD_PRODUCT_CARDS_FAIL = "LOAD_PRODUCT_CARDS_FAIL";
 
export function loadProductCards(limit){
    //console.log("loadProductCards action")
    return { 
        type: LOAD_PRODUCT_CARDS,
        limit: limit
    } 
}