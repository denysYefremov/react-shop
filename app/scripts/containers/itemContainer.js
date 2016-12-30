import { connect } from 'react-redux';
import itemsList from '../items/itemsList';
import { addProduct } from '../actions/productActions';

const mapStateToProps = state => ({
  products: state.items,
});

const mapDispatchToProps = dispatch => ({
  onProductClick: (item) => {
    dispatch(addProduct(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(itemsList);
