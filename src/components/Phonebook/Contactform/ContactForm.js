import React, { Component } from 'react';
import { Form, Button, H3 } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <H3>Name</H3>
          <input
            name="name"
            onChange={this.handleInputChange}
            type="text"
            value={this.state.name}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <label>
          <H3>Phone number</H3>
          <input
            name="number"
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

StaticRange.PropTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
