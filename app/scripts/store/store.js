import { createStore, combineReducers } from 'redux';
import basketReducer from '../reducers/basketReducer';
import itemsReducer from '../reducers/itemsReducer';

const reducers = combineReducers(
  {
    basket: basketReducer,
    items: itemsReducer,
  },
);

const getAvailableDevTools = () => {
  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    return window.devToolsExtension();
  }

  return f => f;
};

const mainStore = createStore(
  reducers,
  getAvailableDevTools(),
);

export default mainStore;
