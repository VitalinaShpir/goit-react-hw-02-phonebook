import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <ContactList contacts={contacts}/> */}
      </div>
    );
  }
}
