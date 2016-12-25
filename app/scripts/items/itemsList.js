import React, { PropTypes } from 'react';
import Item from './item';
import productShape from '../shapes/productShape';
import WithReadyState from '../containers/withReadyState';

const ItemList = ({ products, onProductClick }) => (
  <ul className="items-list">
    {
      products.map(product =>
        <WithReadyState key={product.id} isReady={product.count > 0}>
          <Item
            key={product.id}
            item={product}
            onClick={() => onProductClick(product)}
          />
        </WithReadyState>,
      )
    }
  </ul>
);

const { arrayOf, shape, func } = PropTypes;

ItemList.propTypes = {
  products: arrayOf(
    shape(
      productShape,
    ),
  ).isRequired,
  onProductClick: func.isRequired,
};

export default ItemList;
