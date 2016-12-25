import { createStore } from 'redux';
import basketReducer from '../reducers/basketReducer';

const getAvailableDevTools = () => {
  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    return window.devToolsExtension();
  }

  return f => f;
};

const mainStore = createStore(
  basketReducer,
  getAvailableDevTools(),
);

export default mainStore;
