import React, { PropTypes } from 'react';
import Item from './item';
import productShape from '../shapes/productShape';
import WithReadyState from '../containers/withReadyState';

const ItemList = ({ products }) => (
  <ul className="items-list">
    {
      products.map(product =>
        <WithReadyState isReady={product.count > 0}>
          <Item
            key={product.id}
            item={product}
          />
        </WithReadyState>,
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
