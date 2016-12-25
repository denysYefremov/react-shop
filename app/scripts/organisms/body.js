import React, { PropTypes } from 'react';
import ItemsList from '../containers/itemContainer';
import productShape from '../shapes/productShape';

const Body = ({ products }) => (
  <div className="body">
    <ItemsList products={products} />
  </div>
);

const { arrayOf, shape } = PropTypes;

Body.propTypes = {
  products: arrayOf(
    shape(
      productShape,
    ),
  ).isRequired,
};

export default Body;
