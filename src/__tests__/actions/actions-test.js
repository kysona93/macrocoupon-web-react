import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { loadProductCards } from './../../app/actions/products.js';

describe('load product cards actions', function () {
  it('should return type LOAD_PRODUCT_CARDS and limit 16', function () {
      expect(loadProductCards(16)).toEqual({ type: 'LOAD_PRODUCT_CARDS', limit: 16 })
  });
});