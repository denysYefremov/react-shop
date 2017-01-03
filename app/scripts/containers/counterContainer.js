import { connect } from 'react-redux';
import Counter from '../atoms/counter';
import { getItemsCountInBasket } from '../selectors/selectors';


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({});

const margeProps = state => ({
  number: getItemsCountInBasket(state),
});

export default connect(mapStateToProps, mapDispatchToProps, margeProps)(Counter);
