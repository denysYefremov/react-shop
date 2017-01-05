import { connect } from 'react-redux';
import Counter from '../atoms/counter';
import { getItemsCountInBasket, getBasketItems } from '../selectors/selectors';

const mapStateToProps = state => getBasketItems(state);

const margeProps = basketItems => ({
  number: getItemsCountInBasket(basketItems),
});

export default connect(mapStateToProps, null, margeProps)(Counter);
