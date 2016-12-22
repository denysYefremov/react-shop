import React, { PropTypes } from 'react';
import Item from './item';

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
    shape,
  ).isRequired,
};

export default ItemList;
