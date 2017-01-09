import { connect } from 'react-redux';
import Counter from '../atoms/counter';
import { getItemsCountInBasket } from '../selectors/selectors';

const mapStateToProps = state => ({
  number: getItemsCountInBasket(state),
});

export default connect(mapStateToProps)(Counter);
