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

const { arrayOf, shape, number, string } = PropTypes;

Shop.propTypes = {
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

export default Shop;
