import React from 'react';
import Counter from '../atoms/counter';

const Basket = () => (
  <a href="basket" className="basket">
    <i className="icon icon-cart" />
    <Counter number={0} />
  </a>
);

export default Basket;
