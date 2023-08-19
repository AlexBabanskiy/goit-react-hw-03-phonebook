import React from 'react';
import ContactItem from '../Contactitem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;

StaticRange.PropTypes = {
  contacts: PropTypes.object,
  onDelete: PropTypes.func,
};
