import { call, put } from "redux-saga/effects";
import assert from "assert";

import { fetchProducts } from './../../src/app/sagas/products/products';
import { getAllProducts } from './../../src/app/api/products';

// unit tests for the users saga
describe('Users saga', () => {
    describe('usersFetchList()', () => {
        const generator = fetchProducts();

        it('should return the getAllProducts call', () => {
            assert.deepEqual(generator.next().value, call(getAllProducts));
        });

        it('should return the PRODUCTS_FETCH_SUCCESS action', () => {
            assert.deepEqual(generator.next().value, put({type: 'PRODUCTS_FETCH_SUCCESS', products: undefined}));
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });
});