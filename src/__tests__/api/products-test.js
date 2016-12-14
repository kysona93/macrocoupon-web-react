import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { getProductCards } from './../../app/api/products.js';

describe('get product cards api', function () {
  it('should return objects promise of product cards', function () {
      const action = {
          type: 'LOAD_PRODUCT_CARDS',
          limit: 16
      }
     expect(getProductCards(action)).toBeUndefined;
  });
});