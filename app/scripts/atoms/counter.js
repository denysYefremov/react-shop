import React, { PropTypes } from 'react';

const Counter = ({ number }) => (
  <span className="counter">
    {number}
  </span>
);

const { number } = PropTypes;

Counter.propTypes = {
  number: number.isRequired,
};

export default Counter;
