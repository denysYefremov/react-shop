import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import styles from './styles/index.less';
import Shop from './scripts/main/shop';
import store from './scripts/store/store';

ReactDom.render(
  <Provider store={store} >
    <Shop />
  </Provider>,
  document.getElementById('root'),
);
