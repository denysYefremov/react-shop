import React, { PropTypes } from 'react';
import Counter from '../atoms/counter';
import productShape from '../shapes/productShape';
import noImage from '../../images/no-image.png';

const Item = ({ item, canAddItems, onClick }) => {
  const { name, count, img } = item;
  const backgroundImage = { backgroundImage: `url(${img || noImage})` };
  return (
    <li className="item">
      <div className="item-image" style={backgroundImage} alt="" />
      <div className="info">
        <h3>{name}</h3>
        <Counter number={count} />
        <a
          href="item-action"
          className="item-action"
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <i className={`icon ${canAddItems ? 'icon-plus' : 'icon-cancel'}`} />
        </a>
      </div>
    </li>
  );
};

const { shape, func, bool } = PropTypes;

Item.propTypes = {
  item: shape(
    productShape,
  ).isRequired,
  canAddItems: bool,
  onClick: func.isRequired,
};

export default Item;
