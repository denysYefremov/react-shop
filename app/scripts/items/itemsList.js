import React, { PropTypes } from 'react';
import Item from './item';
import productShape from '../shapes/productShape';

const ItemList = ({ products }) => (
  <ul className="items-list">
    {
      products.map(product =>
        <Item
          key={product.id}
          item={product}
        />,
      )
    }
  </ul>
);

const { arrayOf, shape } = PropTypes;

ItemList.propTypes = {
  products: arrayOf(
    shape(
      productShape,
    ),
  ).isRequired,
};

export default ItemList;
