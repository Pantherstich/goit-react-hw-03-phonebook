import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { H1Title, H2Title, Layout } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38-097-635-35-83' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38-067-274-68-29' },
      { id: 'id-3', name: 'Eden Clements', number: '+38-063-825-36-57' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38-093-756-55-22' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isExist = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );
    const contactObj = {
      ...newContact,
      id: nanoid(),
    };
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactObj],
    }));
  };

  deleteContact = e => {
    const contactToDelete = e.target.id;
    this.setState(prev => ({
      contacts: prev.contacts.filter(({ id }) => id !== contactToDelete),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  render() {
    return (
      <Layout>
        <H1Title>Phonebook</H1Title>
        <ContactForm addContact={this.addContact} />
        <Filter
          filter={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <H2Title>Contacts</H2Title>
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </Layout>
    );
  }
}
