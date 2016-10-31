import React, { Component } from 'react';

class ContactEdit extends Component {
    render() {
        var contact = this.props.contact;

        if(!contact) {
            return (
                <div>Nothing here!</div>
            );
        }


        return (
            <div>
                <h4>Contact Edit: {this.props.params.id}</h4>
                <h5>{contact.nickName}</h5>
                <p>{contact.name}</p>
            </div>
        );
    }
}

export default ContactEdit;