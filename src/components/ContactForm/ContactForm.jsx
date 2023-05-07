import { Component } from 'react';
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit"></button>
      </form>
    );
  }
}

export default ContactForm;
