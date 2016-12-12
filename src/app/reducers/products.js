export default function products(state = [{}], action) {
    switch (action.type){
        case 'PRODUCTS_FETCH_SUCCESS':
            console.log(JSON.stringify(action.response.data.data)); // action.products
            return action.products;
        case 'PRODUCTS_FETCH_FAIL':
            return state;
        default:
            return state;
    }
}
