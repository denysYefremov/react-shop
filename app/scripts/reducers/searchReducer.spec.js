import expect from 'expect';
import reducer from './searchReducer';
import { SEARCH_PRODUCTS } from '../constants/constants';

describe('Items reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('Should return keyword of search', () => {
    const text = 'Ribbok';

    expect(reducer('', {
      type: SEARCH_PRODUCTS,
      text,
    })).toEqual(text);
  });
});
