import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { fetchProductCards } from './../../app/sagas/products/products.js';

describe('load product cards actions',  () => {
  it('should return type LOAD_PRODUCT_CARDS_SUCCESS and limit 16',  () => {
       const action={
          limit: 16
      };
      const generator = fetchProductCards(action);
      expect(generator.next().value).toBe(put({type: 'LOAD_PRODUCT_CARDS_SUCCESS', products: undefined}))
  });
});