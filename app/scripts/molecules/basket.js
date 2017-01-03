import React, { Component, PropTypes } from 'react';
import Counter from '../containers/counterContainer';
import ItemsList from '../containers/basketItemsContainer';
import Popover from './popover';

class Basket extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };
  }

  componentWillUpdate({ number }, { isOpened }) {
    if (!number && isOpened) {
      this.setState({ isOpened: false });
    }
  }

  render() {
    return (
      <div className="basket">
        <a
          href="basket"
          onClick={(e) => {
            e.preventDefault();
            this.setState({ isOpened: !this.state.isOpened });
          }}
        >
          <i className="icon icon-cart" />
          <Counter />
        </a>
        <Popover isOpened={this.state.isOpened}>
          <ItemsList />
        </Popover>
      </div>
    );
  }
}

const { number } = PropTypes;

Basket.propTypes = {
  number,
};

export default Basket;
