import { connect } from 'react-redux';
import itemsList from '../items/itemsList';
import { addProduct } from '../actions/productActions';
import { getItems } from '../selectors/selectors';

const mapStateToProps = state => ({
  products: getItems(state),
  canAddItems: true,
});

const mapDispatchToProps = dispatch => ({
  onProductClick: (item) => {
    dispatch(addProduct(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(itemsList);
