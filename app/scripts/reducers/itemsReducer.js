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

const addProductsFromBasket = (state, productsList) => {
  let immutableState = state;
  productsList.forEach((p) => {
    immutableState = immutableState.update(
      immutableState.findIndex(item => item.get('id') === p.get('id')),
      item => item.set('count', item.get('count') + p.get('count')),
    );
  });

  const newArray = productsList.filter(p => !immutableState.some(prod => prod.get('id') === p.get('id')));

  return immutableState.push(...newArray);
};

const itemsReducer = (state = products.payload, action) => {
  switch (action.type) {
    case Constants.ADD_PRODUCT:
      return addProduct(Immutable.fromJS(state), Immutable.fromJS(action.product)).toJS();
    case Constants.REMOVE_PRODUCT:
      return removeProduct(Immutable.fromJS(state), Immutable.fromJS(action.product)).toJS();
    case Constants.EMPTY_BASKET:
      return addProductsFromBasket(Immutable.fromJS(state), Immutable.fromJS(action.products)).toJS();
    default:
      return state;
  }
};

export default itemsReducer;
