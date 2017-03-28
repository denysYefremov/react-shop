import expect from 'expect';
import data from '../../initData';
import reducer from './basketReducer';
import * as types from '../constants/constants';

describe('Basket reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('Should add product to basket', () => {
    const product = data.payload[0];
    const initialState = [];

    const expectedResult = [
      { ...product, count: 1 },
    ];

    expect(reducer(initialState, {
      type: types.ADD_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should add 1 item of product to basket', () => {
    const product = data.payload[0];
    const initialState = [product];

    const expectedResult = [
      { ...product, count: product.count + 1 },
    ];

    expect(reducer(initialState, {
      type: types.ADD_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should remove 1 item of product from the basket', () => {
    const products = data.payload;
    const product = products[0];
    const initialState = products;

    const expectedResult = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, count: p.count - 1 };
      }

      return p;
    });

    expect(reducer(initialState, {
      type: types.REMOVE_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should remove product from the basket', () => {
    const products = data.payload;
    const product = products[1];
    const initialState = products;

    const expectedResult = products.filter(p => p.id !== product.id);

    expect(reducer(initialState, {
      type: types.REMOVE_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should empy the basket', () => {
    const products = data.payload;
    const initialState = products;

    const expectedResult = [];

    expect(reducer(initialState, {
      type: types.EMPTY_BASKET,
      product: products,
    })).toEqual(expectedResult);
  });
});
