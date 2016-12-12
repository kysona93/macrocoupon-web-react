import { LOAD_PRODUCT_CARDS_SUCCESS } from './../../actions/home/index.js';
 
export default function productCards(state=[{}], action){
    switch(action.type){
        case LOAD_PRODUCT_CARDS_SUCCESS : { 
            console.log("reducer productCards",action.response.data);
            return action.response.data
        }
        default:
            return state;
    }
}