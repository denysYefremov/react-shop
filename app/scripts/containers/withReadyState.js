import React, { PropTypes } from 'react';

const WithReadyState = ({ isReady, children }) => isReady && children;

WithReadyState.propTypes = {
  isReady: PropTypes.bool,
};

export default WithReadyState;
