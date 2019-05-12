import React, { Component } from 'react'

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
            email: 'Sapiketibs@gmail.com',
            phone: '555-5555-5555'
          },
          {
            id: 3,
            name: 'Lamps',
            email: 'lamps@gmail.com',
            phone: '888-8888-8888'
          }
       ]  
     }
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Contacts;