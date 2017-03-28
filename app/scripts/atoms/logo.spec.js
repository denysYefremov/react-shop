import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Logo from './logo';
import logoImage from '../../images/logo.png';

describe('Logo component', () => {
  it('Should be rendered with logo image without text', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper.is('a')).toBe(true);
    expect(wrapper.hasClass('logo')).toBe(true);
    expect(wrapper.find('img').prop('alt')).toBe('logo');
    expect(wrapper.find('img').prop('src')).toBe(logoImage);
    expect(wrapper.text()).toBe('');
  });

  it('Should be rendered with with text', () => {
    const text = 'test';
    const wrapper = shallow(<Logo>{text}</Logo>);

    expect(wrapper.text()).toBe(text);
  });
});
