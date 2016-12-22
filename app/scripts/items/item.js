import React, { PropTypes } from 'react';
import Counter from '../atoms/counter';

const Item = ({ item }) => (
  <li className="item">
    <Counter number={item.count} />
    <img src={item.img} alt="" />
    <div className="info">
      <h3>{ item.name }</h3>
      <a href="add-to-basket">
        <i className="icon icon-plus" />
      </a>
    </div>
  </li>
);

const { shape, number, string } = PropTypes;

Item.propTypes = {
  item: shape(
    {
      id: number,
      name: string,
      description: string,
      count: number,
      img: string,
    },
  ).isRequired,
};

export default Item;
