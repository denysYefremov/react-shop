import React, { PropTypes } from 'react';
import Counter from '../atoms/counter';
import productShape from '../shapes/productShape';
import noImage from '../../images/no-image.png';

const Item = ({ item, onClick }) => {
  const backgroundImage = { 'background-image': `url(${item.img || noImage})` };
  return (
    <li className="item">
      <Counter number={item.count} />
      <div className="background-image" style={backgroundImage} alt="" />
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
};

const { shape, func } = PropTypes;

Item.propTypes = {
  item: shape(
    productShape,
  ).isRequired,
  onClick: func.isRequired,
};

export default Item;
