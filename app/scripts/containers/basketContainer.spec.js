import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { mount } from 'enzyme';
import BasketContainer from './basketContainer';
import Basket from '../molecules/basket';
import Popover from '../molecules/popover';
import data from '../../initData';
import { removeItems } from '../actions/productActions';

const prod = data.payload[0];
const store = configureMockStore()({ basket: [prod] });

describe('Basket container', () => {
  let container;
  let basket;
  let spy;

  beforeEach(() => {
    spy = spyOn(store, 'dispatch');

    const wrapper = mount(
      <Provider store={store}>
        <BasketContainer />
      </Provider>,
    );

    container = wrapper.find(BasketContainer);
    basket = container.find(Basket);
  });

  it('Should contains specific structure', () => {
    expect(basket.length).toBeTruthy();

    expect(basket.find('div').hasClass('basket')).toBe(true);
    expect(basket.find('a').prop('href')).toBe('basket');
  });

  it('Should be closed by default', () => {
    const popover = basket.find(Popover);

    expect(basket.node.state).toEqual({ isOpened: false });
    expect(popover.props().isOpened).toBe(false);
  });

  it('Should be opened on basket icon click', () => {
    const popover = basket.find(Popover);
    const clickableIcon = basket.find('a');

    expect(basket.node.state).toEqual({ isOpened: false });
    expect(popover.props().isOpened).toBe(false);

    clickableIcon.simulate('click');

    expect(basket.node.state).toEqual({ isOpened: true });
    expect(popover.props().isOpened).toBe(true);
  });

  it('Should dispatch empty basket action on button click', () => {
    const clickableIcon = basket.find('a');
    clickableIcon.simulate('click');

    const button = basket.find('.empty-basket');

    button.simulate('click');

    expect(spy.calls.length).toEqual(1);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(removeItems([prod]));
    expect(spy.calls[0].arguments[0]).toEqual(removeItems([prod]));

    spy.restore();
    expect.restoreSpies();
  });
});
