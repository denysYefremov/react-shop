import React, { PropTypes, Component } from 'react';
import Logo from '../atoms/logo';

const Footer = () => (
  <div className="footer">
    <p className="left">
      <span>© 2016 superShop, Inc.</span>
      <a href="Terms">Terms</a>
      <a href="Privacy">Privacy</a>
      <a href="Security">Security</a>
      <a href="Status">Status</a>
      <a href="Help">Help</a>
    </p>
    <Logo />
    <p className="right">
      <a href="Contact">Contact</a>
      <a href="API">API</a>
      <a href="Training">Training</a>
      <a href="Shop">Shop</a>
      <a href="Blog">Blog</a>
      <a href="About">About</a>
    </p>
  </div>
);

export default Footer;
