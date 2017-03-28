import expect from 'expect';
import data from '../../initData';
import reducer from './itemsReducer';
import * as types from '../constants/constants';

describe('Items reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(data.payload);
  });

  it('Should remove 1 item of product from the list of products', () => {
    const products = data.payload;
    const product = products[3];
    const initialState = [...products];

    const expectedResult = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, count: p.count - 1 };
      }

      return p;
    });

    expect(reducer(initialState, {
      type: types.ADD_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should remove product from the list of products', () => {
    const products = data.payload;
    const product = products[1];
    const initialState = products;

    const expectedResult = products.filter(p => p.id !== product.id);

    expect(reducer(initialState, {
      type: types.ADD_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should add 1 item to list of products', () => {
    const product = data.payload[0];
    const initialState = [product];

    const expectedResult = [
      { ...product, count: product.count + 1 },
    ];

    expect(reducer(initialState, {
      type: types.REMOVE_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should add product to list of products', () => {
    const product = data.payload[0];
    const initialState = [];

    const expectedResult = [
      { ...product, count: 1 },
    ];

    expect(reducer(initialState, {
      type: types.REMOVE_PRODUCT,
      product,
    })).toEqual(expectedResult);
  });

  it('Should empy the basket', () => {
    const products = data.payload;
    const initialState = [];

    expect(reducer(initialState, {
      type: types.EMPTY_BASKET,
      products,
    })).toEqual(products);
  });
});
