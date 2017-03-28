import React, { PropTypes } from 'react';
import logoImage from '../../images/logo.png';

const Logo = ({ children }) => (
  <a href="/" className="logo">
    <img alt="logo" src={logoImage} />
    {children && <span className="shop-title">{children}</span>}
  </a>
);

const { node } = PropTypes;
Logo.propTypes = {
  children: node,
};

export default Logo;
