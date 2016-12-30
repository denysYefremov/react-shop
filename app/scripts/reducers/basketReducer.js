const addProduct = (state, obj) => {
  let index = 0;
  const product = state.find((p, i) => {
    if (p.id === obj.id) {
      index = i;
      return true;
    }
    return false;
  });

  if (product) {
    return state.map((p, i) => {
      if (i === index) {
        return {
          ...p,
          count: p.count + 1,
        };
      }
      return p;
    });
  }

  return [
    ...state,
    {
      ...obj,
      count: 1,
    },
  ];
};

const removeProduct = (state, obj) => state.map((product) => {
  if (product.id !== obj.id || product.count === 0) {
    return product;
  }
  return {
    ...product,
    count: product.count - 1,
  };
});

const basketReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return addProduct(state, action.product);
    case 'REMOVE_PRODUCT':
      return removeProduct(state, action.product);
    default:
      return state;
  }
};

export default basketReducer;
