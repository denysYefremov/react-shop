import { connect } from 'react-redux';
import Basket from '../molecules/basket';

const mapStateToProps = state => ({
  isEmpty: !!state.basket.length,
});

export default connect(mapStateToProps)(Basket);
