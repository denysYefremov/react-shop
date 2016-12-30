import products from '../../initData';

const addProduct = (state, obj) => state.map((product) => {
  if (product.id !== obj.id || product.count === 0) {
    return product;
  }
  return {
    ...product,
    count: product.count - 1,
  };
});

const removeProduct = (state, obj) => state.map((product) => {
  if (product.id !== obj.id) {
    return product;
  }
  return {
    ...product,
    count: product.count + 1,
  };
});

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
