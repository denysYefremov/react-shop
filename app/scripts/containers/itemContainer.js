import { connect } from 'react-redux';
import Item from '../items/item';
import { addProduct } from '../actions/productActions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(addProduct(ownProps.item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
