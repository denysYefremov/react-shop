import React, { PropTypes } from 'react';
import Logo from '../atoms/logo';
import Basket from '../containers/basketContainer';
import Search from '../containers/searchContainer';

const Header = () => (
  <div className="header">
    <Logo>Super Shop</Logo>
    <h1 className="title">Super shop!</h1>
    <Search />
    <Basket />
  </div>
);

export default Header;
