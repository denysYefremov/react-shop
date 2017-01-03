import { connect } from 'react-redux';
import itemsList from '../items/itemsList';
import { removeProduct } from '../actions/productActions';
import { getBasketItems } from '../selectors/selectors';

const mapStateToProps = state => ({
  products: getBasketItems(state),
  canAddItems: false,
});

const mapDispatchToProps = dispatch => ({
  onProductClick: (item) => {
    dispatch(removeProduct(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(itemsList);
