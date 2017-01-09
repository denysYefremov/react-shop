import { SEARCH_PRODUCTS } from '../constants/constants';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default filterReducer;
