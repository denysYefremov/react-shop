import { connect } from 'react-redux';
import Counter from '../atoms/counter';
import { getItemsCountInBasket } from '../selectors/selectors';

const margeProps = state => ({
  number: getItemsCountInBasket(state),
});

export default connect(null, null, margeProps)(Counter);
