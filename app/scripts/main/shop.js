import React, { PropTypes } from 'react';
import Header from '../organisms/header';
import Body from '../organisms/body';
import Footer from '../organisms/footer';


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
    shape,
  ).isRequired,
};

export default Shop;
