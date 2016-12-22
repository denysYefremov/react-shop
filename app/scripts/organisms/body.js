import React, { PropTypes } from 'react';
import ItemsList from '../items/itemsList';

const Body = ({ products }) => (
  <div className="body">
    <ItemsList products={products} />
  </div>
);

const { arrayOf, shape, number, string } = PropTypes;

Body.propTypes = {
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

export default Body;
