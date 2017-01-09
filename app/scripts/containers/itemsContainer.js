import { connect } from 'react-redux';
import itemsList from '../items/itemsList';
import { addProduct } from '../actions/productActions';
import { getItems, getSearchText, searchItems } from '../selectors/selectors';

const mapStateToProps = state => ({
  products: getItems(state),
  search: getSearchText(state),
  canAddItems: true,
});

const mapDispatchToProps = dispatch => ({
  onProductClick: (item) => {
    dispatch(addProduct(item));
  },
});

const margeProps = ({ products, search, canAddItems }, { onProductClick }) => ({
  products: searchItems(products, search),
  canAddItems,
  onProductClick,
});

export default connect(mapStateToProps, mapDispatchToProps, margeProps)(itemsList);
