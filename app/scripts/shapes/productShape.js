import { PropTypes } from 'react';

const { number, string } = PropTypes;

export default {
  id: number.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  count: number.isRequired,
  img: string.isRequired,
};
