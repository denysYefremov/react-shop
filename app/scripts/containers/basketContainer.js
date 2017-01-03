import { connect } from 'react-redux';
import Basket from '../molecules/basket';
import { getBasketItems } from '../selectors/selectors';

const mapStateToProps = state => ({
  isEmpty: !!getBasketItems(state).length,
});

export default connect(mapStateToProps)(Basket);
