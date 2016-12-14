import React from 'react';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactAdd from './ContactAdd';

import data from '../mock/data.js';

class ContactContainer extends React.Component{

	constructor() {
		super();

		this.state = {
			contacts: {data},
			contactDetails: {},
			contactFilter: '',
			contactBrowserDisplay: true,
			contactAddDisplay: false,
			contactDetailsDisplay: false
		}
	}

	addContact(contact) {
		// update contact list
		const contacts = {...this.state.contacts};

		// add in contact
		const timestamp = Date.now();
		contacts[`contact-${timestamp}`] = contact;

		// set state
		this.setState({ contacts })
	}

	setFilter(filterTextInput) {
		this.setState({contactFilter: filterTextInput});
	}
	toggleContactBrowserDisplay(){
		const contactBrowserDisplay = this.state.contactBrowserDisplay;
		this.setState( { contactBrowserDisplay: !contactBrowserDisplay });
	}
	toggleContactAddDisplay() {
		const contactAddDisplay = this.state.contactAddDisplay;
		this.setState( { contactAddDisplay: !contactAddDisplay } );
	}
	toggleContactDetailsDisplay() {
		const contactDetailsDisplay = this.state.contactDetailsDisplay;
		this.setState( { contactDetailsDisplay: !contactDetailsDisplay } )
	}

	render(){
		return(
			<div className="row contact-container">
				<div className="six columns" >
					<h5 className="container-title">All Contacts</h5>
					<ContactSearch 
						setFilter={ (e) => this.setFilter(e) }
					/>
					<ContactList
						contacts={ this.state.contacts } 
						contactFilter={ this.state.contactFilter }
						toggleDisplay={ (e) => this.toggleContactBrowserDisplay(e) }
						contactDetails={ (e) => this.toggleContactDetailsDisplay(e) } 
					 />
				</div>
				<div className="six columns" >
					<ContactAdd 
						display={ this.state.contactAddDisplay }
						addContact={ (e) => this.addContact(e) }
						toggleDisplay={ (e) => this.toggleContactAddDisplay(e)}
					/>
					<ContactDetails 
						display={ this.state.contactDetailsDisplay }
						toggleContactBrowserDisplay={ (e) => this.toggleContactBrowserDisplay(e) }
						toggleContactDetailsDisplay={ (e) => this.toggleContactDetailsDisplay(e) }
					/>
				</div>
			</div>
		)
	}
}

export default ContactContainer;