import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

handleAddNewContact = newContact => {
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }));
};

getSavedContacts = () => {
  const {contacts} = this.state;

  return contacts
};

  render() {
    const { contacts} = this.state;
    const SavedContacts = this.getSavedContacts()
    const contactsName = contacts.map(contact => contact.name);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
        onSubmit={this.handleAddNewContact}
        contactsName={contactsName}
        />

        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactList 
        SavedContacts={SavedContacts} 
        />
      </div>
    );
  }
}
