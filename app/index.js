import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import styles from './styles/index.less';
import Shop from './scripts/main/shop';
import Body from './scripts/organisms/body';
import ProductPage from './scripts/containers/productPageContainer';
import store from './scripts/store/store';

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={Shop}>
        <IndexRoute component={Body} />
        <Route path="/:itemId" component={ProductPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
