import React, { Component, PropTypes } from 'react';
import Counter from '../containers/counterContainer';
import ItemsList from '../containers/basketItemsContainer';
import productShape from '../shapes/productShape';
import Popover from './popover';

class Basket extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };
  }

  componentWillReceiveProps({ isEmpty }) {
    (this.props.isEmpty !== isEmpty && isEmpty) {
      this.setState({ isOpened: false });
    }
  }

  render() {
    const { isOpened } = this.state;
    const { isEmpty, products, emptyBasket } = this.props;

    return (
      <div className="basket">
        <a
          href="basket"
          onClick={(e) => {
            e.preventDefault();
            this.setState({ isOpened: !isOpened });
          }}
        >
          <i className="icon icon-cart" />
          <Counter />
        </a>
        <Popover isOpened={isOpened}>
          {
            isEmpty ?
              <span> There is no products yet </span> :
              <div>
                <ItemsList />
                <button
                  className="empty-basket"
                  onClick={() => {
                    emptyBasket(products);
                  }}
                >
                  Remove all
                </button>
              </div>
          }
        </Popover>
      </div>
    );
  }
}

const { arrayOf, shape, bool, func } = PropTypes;

Basket.propTypes = {
  isEmpty: bool,
  products: arrayOf(
    shape(
      productShape,
    ),
  ).isRequired,
  emptyBasket: func,
};

export default Basket;
