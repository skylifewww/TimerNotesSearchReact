import React, { Component } from 'react';
import Contact from './Contact';
import CONTACTS from '../dataContacts';


class ContactList extends Component {
  constructor() {
    super();

    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      displayedContacts: CONTACTS
    };
  }

  handleSearch(event) {
    const searchQuery = event.target.value.toLowerCase();
    const displayedContacts = CONTACTS.filter(function(el) {
      const searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({ displayedContacts });
  }

  render() {
    return (
      <div className='contacts'>
        <input
          type='text'
          className='search-field'
          onChange={this.handleSearch}
        />
        <ul className='contacts-list'>
          {
            this.state.displayedContacts.map(function(el) {
              return <Contact
                key={el.id}
                name={el.name}
                phoneNumber={el.phoneNumber}
                image={el.image}
                     />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ContactList;
