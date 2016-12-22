import React, { PropTypes } from 'react';
import Header from '../organisms/header';
import Body from '../organisms/body';
import Footer from '../organisms/footer';
import productShape from '../shapes/productShape';

const Shop = ({ products }) => (
  <div className="main">
    <Header />
    <Body products={products} />
    <Footer />
  </div>
);

const { arrayOf, shape } = PropTypes;

Shop.propTypes = {
  products: arrayOf(
    shape(
      productShape,
    ),
  ).isRequired,
};

export default Shop;
