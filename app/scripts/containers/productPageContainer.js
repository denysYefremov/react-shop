import { connect } from 'react-redux';
import ProductPage from '../pages/productPage';
import { getItems, getItemById } from '../selectors/selectors';

const mapStateToProps = (state, ownProps) => ({ products: getItems(state), id: ownProps.params.itemId });

const margeProps = state => ({
  product: getItemById(state.products, parseInt(state.id, 0)),
});

export default connect(mapStateToProps, null, margeProps)(ProductPage);
