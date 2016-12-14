
import axios from 'axios';

const config = {
    headers: {
        'Content-Type':'application/json',
        'X-Api-Key':'AbCdEfGhIjK1'
    }
};

export function getProductSearch(product_name){
    const response = axios.get("http://localhost:9000/api/v1/products/"+product_name, config).then(function(response){
        console.log("response in API", response.data)
        return response.data;
    })
    return response;
}