import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import WithReadyState from './withReadyState';

describe('With ready state component', () => {
  const element = (<div className="newDiv" />);

  it('Shouldn\'t render child component', () => {
    const readyState = false;

    const wrapper = shallow(
      <WithReadyState isReady={readyState}>
        {element}
      </WithReadyState>,
    );

    expect(wrapper.contains(element)).toBe(readyState);
  });

  it('Should render child component', () => {
    const readyState = true;

    const wrapper = shallow(
      <WithReadyState isReady={readyState}>
        {element}
      </WithReadyState>,
    );

    expect(wrapper.contains(element)).toBe(readyState);
  });
});
