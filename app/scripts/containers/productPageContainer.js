import { connect } from 'react-redux';
import ProductPage from '../pages/productPage';
import { getItems, getItemById } from '../selectors/selectors';

const mapStateToProps = state => ({ products: getItems(state) });

const margeProps = ({ products }, dispatchProps, { params }) => ({
  product: getItemById(products, parseInt(params.itemId, 0)),
});

export default connect(mapStateToProps, null, margeProps)(ProductPage);
