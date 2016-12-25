import React from 'react';
import Counter from '../containers/counterContainer';

const Basket = () => (
  <a href="basket" className="basket">
    <i className="icon icon-cart" />
    <Counter />
  </a>
);

export default Basket;
