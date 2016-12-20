import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

ReactDom.render(
  <Provider store={createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Shop />
  </Provider>,
  document.getElementById('root'),
);
