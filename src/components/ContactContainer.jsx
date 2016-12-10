import React from 'react';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactAdd from './ContactAdd';

const styles = {
	show: {
		display: 'block',
		border: '1px black solid',
		backgroundColor: 'white'
	},
	hide: {
		display: 'none'
	},
	leftPadding25px: {
		paddingLeft: '1vw',
		paddingRight: '1vw'
	}
}

class ContactContainer extends React.Component{

	constructor() {
		super();

		this.addContact = this.addContact.bind(this);

		this.state = {
			contacts: {},
			contactDetails: {},
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
			<div className="row" style={ styles.leftPadding25px }>
				<div className="four columns" style={ this.state.contactBrowserDisplay ? styles.show : styles.hide } >
					<ContactSearch />
					<ContactList 
						toggleDisplay={ (e) => this.toggleContactBrowserDisplay(e) }
						contactDetails={ (e) => this.toggleContactDetailsDisplay(e) } 
					 />
				</div>
				<div className="eight columns">
					<ContactAdd 
						addContact={ this.addContact }
						display={ this.state.contactAddDisplay }
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