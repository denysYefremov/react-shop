import React, { PropTypes } from 'react';
import Header from '../organisms/header';
import Body from '../organisms/body';
import Footer from '../organisms/footer';
import productShape from '../shapes/productShape';

const Shop = () => (
  <div className="main">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default Shop;
