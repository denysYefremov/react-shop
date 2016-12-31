import React, { PropTypes } from 'react';
import Item from './item';
import productShape from '../shapes/productShape';
import WithReadyState from '../containers/withReadyState';

const ItemsList = ({ products, canAddItems, onProductClick }) => (
  <ul className="items-list">
    {
      products.map(product =>
        <WithReadyState key={product.id} isReady={product.count > 0}>
          <Item
            key={product.id}
            item={product}
            canAddItems={canAddItems}
            onClick={() => onProductClick(product)}
          />
        </WithReadyState>,
      )
    }
  </ul>
);

const { arrayOf, shape, func, bool } = PropTypes;

ItemsList.propTypes = {
  products: arrayOf(
    shape(
      productShape,
    ),
  ).isRequired,
  canAddItems: bool,
  onProductClick: func.isRequired,
};

export default ItemsList;
