import Immutable from 'immutable';
import products from '../../initData';

const addProduct = (state, obj) => {
  let immutState = Immutable.List.of(...state);
  immutState = immutState.map((p) => {
    if (p.id === obj.id) {
      return {
        ...p,
        count: p.count - 1,
      };
    }
    return p;
  });

  return immutState.filter(iState => iState.count !== 0).toArray();
};

const removeProduct = (state, obj) => {
  let immutState = Immutable.List.of(...state);
  let index = 0;
  const product = immutState.map((p, i) => {
    if (p.id === obj.id) {
      index = i;
      return true;
    }
    return false;
  });

  if (product) {
    immutState.get(index).count += 1;
  } else {
    immutState = immutState.push({ ...obj, count: 1 });
  }

  return immutState.toArray();
};

const itemsReducer = (state = products.payload, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return addProduct(state, action.product);
    case 'REMOVE_PRODUCT':
      return removeProduct(state, action.product);
    default:
      return state;
  }
};

export default itemsReducer;
