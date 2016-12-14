import { PRODUCTS_SEARCH_FETCH_SUCCESS } from './../../actions/search-action.jsx';

export default function productSearchItem(state=[{}], action){
    switch(action.type){
        case PRODUCTS_SEARCH_FETCH_SUCCESS : {
            console.log("reducer product item",action.response.data);
            return action.response.data
        }
        default:
            return state;
    }
}