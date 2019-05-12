import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
    case 'DELETE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        }
        default:
            return state;     
    }
}

export class Provider extends Component {
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
         ],
         dispatch: action =>
             this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value= {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;