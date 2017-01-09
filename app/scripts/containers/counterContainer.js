import { connect } from 'react-redux';
import Counter from '../atoms/counter';
import { getItemsCountInBasket, getBasketItems } from '../selectors/selectors';

const mapStateToProps = state => ({ items: getBasketItems(state) });

const margeProps = ({ items }) => ({
  number: getItemsCountInBasket(items),
});

export default connect(mapStateToProps, null, margeProps)(Counter);
