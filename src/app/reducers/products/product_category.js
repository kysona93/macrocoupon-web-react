
export default function products(state=[{}], action) {
switch (action.type){
  case 'PRODUCT_CATEGORY_FETCH_SUCCESS':
        console.log(JSON.stringify(action.products));
        return action.products;

  default:
        return state;
}
}
