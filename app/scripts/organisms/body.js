import React, { PropTypes } from 'react';

const Body = ({ products }) => (
  <div className="body">
  </div>
);

const { arrayOf, shape } = PropTypes;

Body.propTypes = {
  products: arrayOf(
    shape,
  ).isRequired,
};

export default Body;
