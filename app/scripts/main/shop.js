import React, { PropTypes } from 'react';
import Header from '../organisms/header';
import Body from '../organisms/body';
import Footer from '../organisms/footer';
import productShape from '../shapes/productShape';

const Shop = ({ children }) => (
  <div className="main">
    <Header />
    {children}
    <Footer />
  </div>
);

const { element } = PropTypes;

Shop.propTypes = {
  children: element.isRequired,
};

export default Shop;
