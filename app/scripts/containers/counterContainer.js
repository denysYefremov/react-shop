import { connect } from 'react-redux';
import Counter from '../atoms/counter';

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

export default connect(mapStateToProps)(Counter);
