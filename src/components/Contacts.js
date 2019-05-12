import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
  state = {
      contacts: [
          {
            id: 1,
            name: 'Ketibansapi',
            email: 'ketibs@gmail.com',
            phone: '222-2222-2222'
          },
          {
            id: 2,
            name: 'Sapiketibs',
            email: 'sapiketibs@gmail.com',
            phone: '555-5555-5555'
          },
          {
            id: 3,
            name: 'Lamps',
            email: 'lamps@gmail.com',
            phone: '888-8888-8888'
          }
       ]  
     };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        { contacts.map(contact => (
            <Contact key = { contact.id } contact = {contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;