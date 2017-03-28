import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import { mount } from 'enzyme';
import CounterContainer from './counterContainer';
import data from '../../initData';

const prod = data.payload[0];
const store = configureMockStore()({ basket: [prod] });

describe('Counter container', () => {
  let CounterContainerComponent;

  beforeEach(() => {
    const wrapper = mount(
      <Provider store={store}>
        <CounterContainer />
      </Provider>,
    );

    CounterContainerComponent = wrapper.find(CounterContainer);
  });

  it('Should work with redux store', () => {
    expect(CounterContainerComponent.length).toBeTruthy();

    expect(CounterContainerComponent.find('span').hasClass('counter')).toBe(true);
    expect(CounterContainerComponent.find('span').text()).toBe(prod.count.toString());
  });
});
