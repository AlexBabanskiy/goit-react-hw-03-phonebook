import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Delete
  </button>
);

export default DeleteButton;

StaticRange.PropTypes = {
  onClick: PropTypes.func,
};
