import React, { PropTypes } from 'react';

const Popover = ({ isOpened, children }) => isOpened &&
  <div className="popover">
    {children}
  </div>;

const { bool, node } = PropTypes;

Popover.propTypes = {
  isOpened: bool.isRequired,
  children: node.isRequired,
};

export default Popover;
