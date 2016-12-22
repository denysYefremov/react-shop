import React, { PropTypes } from 'react';
import Counter from '../atoms/counter';

const Item = ({ item }) => (
  <li className="item">
    <Counter number={item.count} />
    <img src={item.img} alt="" />
    <div className="item-info">
      <h3>{ item.name }</h3>
      <i className="icon icon-plus" />
    </div>
  </li>
);

const { shape } = PropTypes;

Item.propTypes = {
  item: shape.isRequired,
};

export default Item;
