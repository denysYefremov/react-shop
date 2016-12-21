import React, { PropTypes, Component } from 'react';
import logoImage from '../../images/logo.png';

const Logo = ({ children }) => (
  <a href="/" className="logo">
    <img alt="logo" src={logoImage} />
    {children && <span className="shop-title">{children}</span>}
  </a>
);

const { element } = PropTypes;
Logo.propTypes = {
  children: element,
};

export default Logo;
