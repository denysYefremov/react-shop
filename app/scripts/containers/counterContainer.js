import { connect } from 'react-redux';
import Counter from '../atoms/counter';
import { getItemsCountInBasket, getBasketItems } from '../selectors/selectors';

const mapStateToProps = state => state;

const margeProps = state => ({
  number: getItemsCountInBasket(state),
});

export default connect(mapStateToProps, null, margeProps)(Counter);
