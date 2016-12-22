import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import styles from './styles/index.less';
/* import { createStore } from 'redux';
import { Provider } from 'react-redux'; */
import Shop from './scripts/main/shop';
import shopData from './initData';

ReactDom.render(
  /* <Provider store={createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}> */
  <Shop products={shopData.payload} />,
  /* </Provider>, */
  document.getElementById('root'),
);
