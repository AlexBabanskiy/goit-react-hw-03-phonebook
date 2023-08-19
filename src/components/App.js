import React, { Component } from 'react';
import ContactForm from './Phonebook/Contactform/ContactForm';
import ContactList from './Phonebook/Contactlist/ContactList';
import Filter from './Phonebook/Filter/Filter';
import { nanoid } from 'nanoid';
import {
  PhonebookContainer,
  Title,
} from './Phonebook/Contactitem/Phonebook.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const isExist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in Contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    const displayContacts = contacts.length > 0;

    return (
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        {displayContacts && (
          <div>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.handleFilterChange} />
            {filteredContacts.length > 0 ? (
              <ContactList
                contacts={filteredContacts}
                onDelete={this.handleDeleteContact}
              />
            ) : (
              <p>No contacts found</p>
            )}
          </div>
        )}
      </PhonebookContainer>
    );
  }
}

export default App;
