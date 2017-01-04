import { ADD_PRODUCT, REMOVE_PRODUCT, EMPTY_BASKET } from '../constants/constants';

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  product,
});

export const removeItems = products => ({
  type: EMPTY_BASKET,
  products,
});

export default {};
