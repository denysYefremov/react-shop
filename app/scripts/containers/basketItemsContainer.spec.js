import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { mount } from 'enzyme';
import BasketItemsContainer from './basketItemsContainer';
import Item from '../items/item';
import data from '../../initData';
import { removeProduct } from '../actions/productActions';

const prods = data.payload;
const prod = prods[10];
const store = configureMockStore()({ basket: prods });

describe('Basket items container', () => {
  let container;
  let spy;

  beforeEach(() => {
    spy = spyOn(store, 'dispatch');

    const wrapper = mount(
      <Provider store={store}>
        <BasketItemsContainer />
      </Provider>,
    );

    container = wrapper.find(BasketItemsContainer);
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
    expect(spy).toHaveBeenCalledWith(removeProduct(prod));
    expect(spy.calls[0].arguments[0]).toEqual(removeProduct(prod));

    spy.restore();
    expect.restoreSpies();
  });
});
