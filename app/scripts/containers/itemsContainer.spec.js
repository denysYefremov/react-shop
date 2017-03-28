import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { mount } from 'enzyme';
import ItemsContainer from './itemsContainer';
import Item from '../items/item';
import data from '../../initData';
import { addProduct } from '../actions/productActions';

const searchKeyword = 'Rib';
const prods = data.payload;
const prod = prods[10];
const store = configureMockStore()({ items: prods, search: '' });
const searchStore = configureMockStore()({ items: prods, search: searchKeyword });

describe('Items container', () => {
  let container;
  let spy;

  beforeEach(() => {
    spy = spyOn(store, 'dispatch');

    const wrapper = mount(
      <Provider store={store}>
        <ItemsContainer />
      </Provider>,
    );

    container = wrapper.find(ItemsContainer);
  });

  it('Should contains specific structure', () => {
    expect(container.length).toBeTruthy();

    expect(container.find('ul').hasClass('items-list')).toBe(true);
    expect(container.find(Item).first().hasClass('item')).toBe(true);
  });

  it('Should dispatch the action on item click', () => {
    const item = container.find(Item);
    item.at(prod.id).props().onClick();

    expect(spy.calls.length).toEqual(1);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(addProduct(prod));
    expect(spy.calls[0].arguments[0]).toEqual(addProduct(prod));

    spy.restore();
    expect.restoreSpies();
  });

  it('Should filter items by search keyword', () => {
    const searchWrapper = mount(
      <Provider store={searchStore}>
        <ItemsContainer />
      </Provider>,
    );

    container = searchWrapper.find(ItemsContainer);
    const items = container.find(Item);
    const filteredProducts = prods.filter(p => p.name.toLowerCase().includes(searchKeyword.toLowerCase()));

    expect(items.length).toBe(filteredProducts.length);
  });
});
