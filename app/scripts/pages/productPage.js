import React, { PropTypes } from 'react';
import Shape from '../shapes/productShape';

const ProductPage = ({ product }) => <div>{ JSON.stringify(product) }</div>;

const { shape } = PropTypes;
ProductPage.propTypes = {
  product: shape(Shape).isRequired,
};

export default ProductPage;
