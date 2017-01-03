import Constants from '../constants/constants';

export const addProduct = product => ({
  type: Constants.ADD_PRODUCT,
  product,
});

export const removeProduct = product => ({
  type: Constants.REMOVE_PRODUCT,
  product,
});

export default {};
