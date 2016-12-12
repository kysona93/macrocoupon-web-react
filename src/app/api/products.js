import axios from 'axios';

const config = {
    headers: { 
        'Content-Type':'application/json',
        'Date': 'Mon, 26 Sep 2016 04:37:17 GMT',
        'X-Api-Key':'AbCdEfGhIjK1'
    }
};
const API_ENDPOINT = `http://localhost:9000/api/v1/product-list/`;

export const getProducts = (action) => {
    return (
        axios.get(API_ENDPOINT+action.product.address_state+'/'+action.product.product_name, config).then(function(response){
            return response.data.data;
        })
    );
};







