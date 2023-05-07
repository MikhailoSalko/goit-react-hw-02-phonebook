import { Component } from 'react';
import { nanoid } from 'nanoid';
// import ContactForm from './ContactForm/ContactForm';
import styles from '../components/ContactForm/ContactForm.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState(({ name, contacts }) => {
      const newContact = {
        id: nanoid(),
        name,
      };

      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <ContactForm />
         */}
        <div>
          <div>
            <h1>PhoneBook</h1>
            <form onSubmit={this.handleSubmitForm}>
              <label>
                <input
                  onChange={this.handleInputChange}
                  className={styles.input}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                Name
              </label>
              <button type="submit" className={styles.button}>
                Add Contact
              </button>
            </form>
          </div>
          <div>
            <h2>Contacts</h2>
            <div>
              <ol>
                {contacts.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
