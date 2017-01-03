import { connect } from 'react-redux';
import Basket from '../molecules/basket';

const foundCount = (state) => {
  let sumCount = 0;
  state.basket.forEach((p) => {
    if (p.count) { sumCount += p.count; }
  });

  return sumCount;
};

const mapStateToProps = state => ({
  number: foundCount(state),
});

export default connect(mapStateToProps)(Basket);
