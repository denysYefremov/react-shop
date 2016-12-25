import products from '../../initData';

const addProduct = (state, obj) => state.map((product) => {
  let newObj = {};
  if (product.id === obj.id && obj.count > 0) {
    newObj = { ...obj };
    newObj.maxCount = newObj.maxCount || newObj.count;
    newObj.count -= 1;
    newObj.addedCount = newObj.addedCount + 1 || 1;
    return newObj;
  }

  return product;
});

const removeProduct = (state, obj) => state.map((product) => {
  let newObj = {};
  if (product.id === obj.id && obj.addedCount > 0) {
    newObj = { ...obj };
    newObj.count += 1;
    newObj.addedCount -= 1;

    if (newObj.count === newObj.maxCount) delete newObj.maxCount;

    return newObj;
  }

  return product;
});

const basket = (state = products.payload, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return addProduct(state, action.product);
    case 'REMOVE_PRODUCT':
      return removeProduct(state, action.product);
    default:
      return state;
  }
};

export default basket;

