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

const { arrayOf, shape, number, string } = PropTypes;

ItemList.propTypes = {
  products: arrayOf(
    shape(
      {
        id: number,
        name: string,
        description: string,
        count: number,
        img: string,
      },
    ),
  ).isRequired,
};

export default ItemList;
