import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

const Context = React.createContext();

export class Provider extends Component {
    
    constructor() {
        super();
        this.data = new Data();
        this.cookie = Cookies.get('authenticate4dUser');

        this.state = {
            authenticatedUser: this.cookie ? JSON.parse(this.cookie) : null
        };
    }

    render() {
        const { authenticatedUser } = this.state;
    

        const value = {
            authenticatedUser,
            data: this.data,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
            }
        }

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }

    signIn = async () => {
        
    }


]

