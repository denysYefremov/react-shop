import React, { PropTypes } from 'react';
import ItemsList from '../items/itemsList';

const Body = ({ products }) => (
  <div className="body">
    <ItemsList products={products} />
  </div>
);

const { arrayOf, shape } = PropTypes;

Body.propTypes = {
  products: arrayOf(
    shape,
  ).isRequired,
};

export default Body;
