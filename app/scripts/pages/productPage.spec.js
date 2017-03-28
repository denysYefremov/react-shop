import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ProductPage from './productPage';
import data from '../../initData';

describe('Product page component', () => {
  it('Should be rendered with pasted object as json', () => {
    const product = data.payload[0];
    const wrapper = shallow(<ProductPage product={product} />);

    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.text()).toBe(JSON.stringify(product));
  });
});
