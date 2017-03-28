import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import expect, { spyOn } from 'expect';
import { mount } from 'enzyme';
import SearchContainer from './searchContainer';
import { filterItems } from '../actions/productActions';

const store = configureMockStore()({});

describe('Search container', () => {
  let input;
  let spy;

  beforeEach(() => {
    spy = spyOn(store, 'dispatch');

    const wrapper = mount(
      <Provider store={store}>
        <SearchContainer />
      </Provider>,
    );

    input = wrapper.find(SearchContainer);
  });

  it('Should be called on change', () => {
    const text = 'search';
    expect(input.length).toBeTruthy();

    input.simulate('change', {
      target: { value: text },
    });

    expect(spy.calls.length).toEqual(1);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(filterItems(text));
    expect(spy.calls[0].arguments[0]).toEqual(filterItems(text));

    spy.restore();
    expect.restoreSpies();
  });
});
