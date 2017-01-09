import React, { PropTypes } from 'react';
import { filterItems } from '../actions/productActions';

const Search = ({ dispatch }) => (
  <div>
    <input type="text" onChange={e => dispatch(filterItems(e.target.value))} />
  </div>
);

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Search;
