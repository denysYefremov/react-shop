import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Counter from './counter';

describe('Counter component', () => {
  it('Should be rendered with number from the props', () => {
    const num = 22;
    const enzymeWrapper = shallow(<Counter number={num} />);

    expect(enzymeWrapper.find('span').hasClass('counter')).toBe(true);
    expect(enzymeWrapper.find('span').text()).toBe(num.toString());
  });
});
