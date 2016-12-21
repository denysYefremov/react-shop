import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Shop from 'scripts/main/shop';

ReactDom.render(
  <Provider store={createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Shop />
  </Provider>,
  document.getElementById('root'),
);
