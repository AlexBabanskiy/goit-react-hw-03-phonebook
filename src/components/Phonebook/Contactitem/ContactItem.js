import React from 'react';
import DeleteButton from '../Deletebutton/DeleteButton';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li key={id}>
    {name}: {number} <DeleteButton onClick={() => onDelete(id)} />
  </li>
);

export default ContactItem;

StaticRange.PropTypes = {
  id: PropTypes.object,
  name: PropTypes.object,
  number: PropTypes.object,
  onDelete: PropTypes.func,
};
