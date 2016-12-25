import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import styles from './styles/index.less';
import Shop from './scripts/main/shop';
import shopData from './initData';
import store from './scripts/store/store';

ReactDom.render(
  <Provider store={store} >
    <Shop products={shopData.payload} />
  </Provider>,
  document.getElementById('root'),
);
