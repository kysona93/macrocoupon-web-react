import axios from 'axios';

const config = {
    headers: { 
        'Content-Type':'application/json',
        'X-Api-Key':'AbCdEfGhIjK1'
    }
}; 

export function getProductCards(action){
    const response = axios.get("http://localhost:9000/api/v1/products/list/"+action.limit, config).then(function(response){
        console.log("response in API", response.data)
        return response.data;
    })
    return response;
}