import assert from 'assert';
import products from './../../../src/app/reducers/products/products';

// unit tests for the users reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Product Reducer', () => {
    describe('PRODUCTS_FETCH_SUCCESS', () => {
        it('should return a list of products', () => {
            assert.deepEqual(
                products({}, {
                    type: 'PRODUCTS_FETCH_SUCCESS',
                    products: [{
                        product_id: new Object(''),
                        product_name: 'Some name',
                        product_price: 19.11,
                        address_state: 'Some location'
                    }],
                }), [{
                    product_id: new Object(''),
                    product_name: 'Some name',
                    product_price: 19.11,
                    address_state: 'Some location'
                }]
            );
        });
    });

    describe('PRODUCTS_FETCH_FAIL', () => {
        it('should return a list of null', () => {
            assert.deepEqual(
                products({}, {
                    type: 'PRODUCTS_FETCH_FAIL',
                    products: {},}), {

                }
            );
        });
    });    

});