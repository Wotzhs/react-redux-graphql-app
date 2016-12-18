import React from 'react';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactAdd from './ContactAdd';

import sampleContacts from '../mock/data.js';

const styles = {
	show: {
		display: 'block'
	},
	hide: {
		display: 'none'
	}
}

class ContactContainer extends React.Component{
	constructor() {
		super();
		this.state = {
			contacts: {},
			contactDetails: {},
			contactKey: '',
			contactFilter: '',
			contactBrowserDisplay: true,
			contactAddDisplay: false,
			isMobile: window.matchMedia('(min-width: 570px)').matches ? false : true 
		}
		this.listenWindowWidthChanges();
	}

	componentWillMount() {
		this.setState({ contacts: sampleContacts });
	}

	addContact( contact ) {
		const contacts = {...this.state.contacts};
		const timestamp = Date.now();
		contacts[`contact-${timestamp}`] = contact;
		this.setState({ contacts: contacts })
	}
	updateContact( updatedContact ) {
		const contact = {...this.state.contacts};
		contact[this.state.contactKey] = updatedContact;
		this.setState({contacts: contact});
	}
	listenWindowWidthChanges(){
		const mediaQuery = window.matchMedia('(min-width: 570px)');
		mediaQuery.addListener( (mq) => {
			if ( mq.matches ) {
				this.setState( { contactBrowserDisplay: true, isMobile: false } );
			}
			if ( !mq.matches && !Object.keys(this.state.contactDetails).length ) {
				this.setState( { contactBrowserDisplay: true, isMobile: true } );
			}
			if ( !mq.matches && Object.keys(this.state.contactDetails).length ) {
				this.setState( { contactBrowserDisplay: false, isMobile: true } );
			}
			if ( !mq.matches && this.state.contactAddDisplay ) {
				this.setState( { contactBrowserDisplay: false } );
			}
		})
	}

	setFilter(filterTextInput) {
		this.setState( { contactFilter: filterTextInput } );
	}
	loadContactDetails(contact) {
		this.setState( { contactDetails: contact } );
	}
	setContactKey( key ) {
		this.setState( { contactKey: key } );
	}
	clearContactDetails() {
		this.setState({contactDetails: {}});
	}
	setContactBrowserDisplay( status ) {
		this.setState( { contactBrowserDisplay: status });
	}
	setContactAddDisplay( status ) {
		this.setState( { contactAddDisplay: status } );
	}

	render(){
		return(
			<div className="row contact-container">
				<div
					className="six columns"
					style={ this.state.contactBrowserDisplay ? styles.show : styles.hide } 
				>
					<h5 className="container-title">All Contacts</h5>
					<ContactSearch 
						setFilter={ (e) => this.setFilter(e) }
						isMobile={ this.state.isMobile }
						setContactAddDisplay={ (e) => this.setContactAddDisplay(e) }
						setContactBrowserDisplay={ (e) => this.setContactBrowserDisplay(e) }
						clearContactDetails={ (e) => this.clearContactDetails(e) }
					/>
					<ContactList
						contacts={ this.state.contacts } 
						contactFilter={ this.state.contactFilter }
						isMobile={ this.state.isMobile }
						setContactBrowserDisplay={ (e) => this.setContactBrowserDisplay(e) }
						loadContactDetails={ (e) => this.loadContactDetails(e) }
						setContactKey={ (e) => this.setContactKey(e) }
						setContactAddDisplay={ (e) => this.setContactAddDisplay(e) }
					 />
				</div>
				<div className="six columns" >
					<ContactAdd 
						display={ this.state.contactAddDisplay }
						addContact={ (e) => this.addContact(e) }
						isMobile={ this.state.isMobile }
						setContactBrowserDisplay={ (e) => this.setContactBrowserDisplay(e) }
						setContactAddDisplay={ (e) => this.setContactAddDisplay(e)}
					/>
					<ContactDetails 
						contactDetails={ this.state.contactDetails }
						clearContactDetails={ (e) => this.clearContactDetails(e) }
						setContactBrowserDisplay={ (e) => this.setContactBrowserDisplay(e) }
						loadContactDetails={ (e) => this.loadContactDetails(e) }
						updateContact={ (e) => this.updateContact(e) }
					/>
				</div>
			</div>
		)
	}
}

export default ContactContainer;