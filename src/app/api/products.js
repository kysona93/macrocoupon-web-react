import axios from 'axios';
const config = {
    headers: {
        'Content-Type':'application/json',
        'X-Api-Key':'AbCdEfGhIjK1'
    }
};
const API_ENDPOINT = `http://localhost:9000/api/v1/product-list/`;

export const getProducts = (action) => {
    return (
        axios.get(API_ENDPOINT+action.address_state+'/'+action.product_name, config).then(function(response){
            return response.data.data;
        })
    );
};

export const getAllProducts = () => {
    return (
        axios.get(API_ENDPOINT+'String/String', config).then(function(response){
            return response.data.data;
        })
    );
};

/* get product cards to display auto scroll content */
export function getProductCards(action){
    const response = axios.get("http://localhost:9000/api/v1/products/list/"+action.limit, config).then(function(response){
        console.log("response in API", response.data)
        return response.data;
    })
    return response;
}




