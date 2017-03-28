import { connect } from 'react-redux';
import ProductPage from '../pages/productPage';
import { getItems, getItemById } from '../selectors/selectors';

const mapStateToProps = state => ({ products: getItems(state) });

const margeProps = ({ products }, _, { params: { itemId } }) => ({
  product: getItemById(products, parseInt(itemId, 0)),
});

export default connect(mapStateToProps, null, margeProps)(ProductPage);
