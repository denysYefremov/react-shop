import { connect } from 'react-redux';
import itemsList from '../items/itemsList';
import { removeProduct } from '../actions/productActions';

const mapStateToProps = state => ({
  products: state.basket,
  canAddItems: false,
});

const mapDispatchToProps = dispatch => ({
  onProductClick: (item) => {
    dispatch(removeProduct(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(itemsList);
