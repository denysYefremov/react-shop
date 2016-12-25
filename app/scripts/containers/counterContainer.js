import { connect } from 'react-redux';
import Counter from '../atoms/counter';

const foundCount = (state) => {
  let sumCount = 0;
  state.forEach((p) => {
    if (p.addedCount) sumCount += p.addedCount;
  });

  return sumCount;
};

const mapStateToProps = state => ({
  number: foundCount(state),
});

export default connect(mapStateToProps)(Counter);
