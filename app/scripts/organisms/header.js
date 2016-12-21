import React, { PropTypes, Component } from 'react';
import Logo from '../atoms/logo';
import Basket from '../molecules/basket';

const Header = () => (
  <div className="header">
    <Logo>Super Shop</Logo>
    <h1 className="title">Super shop!</h1>
    <Basket />
  </div>
);

export default Header;
