import { connect } from 'react-redux';
import Basket from '../molecules/basket';
import { removeItems } from '../actions/productActions';
import { getBasketItems } from '../selectors/selectors';

const mapStateToProps = state => ({
  isEmpty: !!getBasketItems(state).length,
  products: getBasketItems(state),
});

const mapDispatchToProps = dispatch => ({
  emptyBasket: (products) => {
    dispatch(removeItems(products));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
