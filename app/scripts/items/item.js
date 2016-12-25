import React, { PropTypes } from 'react';
import Counter from '../atoms/counter';
import productShape from '../shapes/productShape';

const Item = ({ item, onClick }) => (
  <li className="item">
    <Counter number={item.count} />
    <img src={item.img} alt="" />
    <div className="info">
      <h3>{ item.name }</h3>
      <a
        href="add-to-basket"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <i className="icon icon-plus" />
      </a>
    </div>
  </li>
);

const { shape, func } = PropTypes;

Item.propTypes = {
  item: shape(
    productShape,
  ).isRequired,
  onClick: func,
};

export default Item;
