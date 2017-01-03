import Immutable from 'immutable';
import products from '../../initData';
import Constants from '../constants/constants';

const addProduct = (state, obj) => {
  const index = state.findIndex(item => item.get('id') === obj.get('id'));

  if (index >= 0) {
    return state.update(index, item => item.set('count', item.get('count') - 1))
      .filter(product => product.get('count') !== 0);
  }

  return state;
};

const removeProduct = (state, obj) => {
  const index = state.findIndex(item => item.get('id') === obj.get('id'));

  if (index >= 0) {
    return state.update(index, item => item.set('count', item.get('count') + 1));
  }

  return state.push(obj.set('count', 1));
};

const itemsReducer = (state = products.payload, action) => {
  switch (action.type) {
    case Constants.ADD_PRODUCT:
      return addProduct(Immutable.fromJS(state), Immutable.fromJS(action.product)).toJS();
    case Constants.REMOVE_PRODUCT:
      return removeProduct(Immutable.fromJS(state), Immutable.fromJS(action.product)).toJS();
    default:
      return state;
  }
};

export default itemsReducer;
