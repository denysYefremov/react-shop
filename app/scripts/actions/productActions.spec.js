import expect from 'expect';
import * as actions from './productActions';
import * as types from '../constants/constants';
import data from '../../initData';

describe('Product actions', () => {
  it('Should create an action to add a product to basket', () => {
    const product = data.payload[0];
    const expectedAction = {
      type: types.ADD_PRODUCT,
      product,
    };
    expect(actions.addProduct(product)).toEqual(expectedAction);
  });

  it('Should create an action to remove a product from the basket', () => {
    const product = data.payload[0];
    const expectedAction = {
      type: types.REMOVE_PRODUCT,
      product,
    };
    expect(actions.removeProduct(product)).toEqual(expectedAction);
  });

  it('Should create an action to empty the basket', () => {
    const products = data.payload;
    const expectedAction = {
      type: types.EMPTY_BASKET,
      products,
    };
    expect(actions.removeItems(products)).toEqual(expectedAction);
  });

  it('Should create an action to filter items in view', () => {
    const text = 'Ribbok';
    const expectedAction = {
      type: types.SEARCH_PRODUCTS,
      text,
    };
    expect(actions.filterItems(text)).toEqual(expectedAction);
  });
});
