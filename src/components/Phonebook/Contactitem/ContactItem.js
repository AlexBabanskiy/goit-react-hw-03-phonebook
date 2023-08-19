import React from 'react';
import DeleteButton from '../Deletebutton/DeleteButton';
import PropTypes from 'prop-types';
import { Li } from './Phonebook.styled';

const ContactItem = ({ id, name, number, onDelete }) => (
  <Li key={id}>
    {name}: {number} <DeleteButton onClick={() => onDelete(id)} />
  </Li>
);

export default ContactItem;

StaticRange.PropTypes = {
  id: PropTypes.object,
  name: PropTypes.object,
  number: PropTypes.object,
  onDelete: PropTypes.func,
};
