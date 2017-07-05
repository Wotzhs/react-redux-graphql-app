import { connect } from 'react-redux';
import { loadContacts, loadContactsSuccess, addContact, addContactSuccess, addContactError, updateContact, updateContactSuccess, updateContactError } from '../actions/contacts';
import { browserHistory } from 'react-router';
import ContactIndex from '../components/ContactIndex';

const mapStateToProps = state => {
	return {
		contacts: state.contacts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadContacts: userId => {
			dispatch( loadContacts( userId ) )
				.then( res => {
					dispatch( loadContactsSuccess( res.payload.data.contacts ) ) 
				} )
				.catch( err => console.log( err))
		},
		addContact: contactDetails => {
			dispatch( addContact( contactDetails ) )
				.then( () => { 
					dispatch( addContactSuccess( 'Successfully added' ) );
					browserHistory.push('/home')
				} )
				.catch( err => dispatch( addContactError( err ) ) );
		},
		updateContact: ( contactDetails, contactId ) => {
			dispatch( updateContact( contactDetails, contactId ) )
				.then( () => {
					dispatch( updateContactSuccess( '' ) );
					browserHistory.push(`/home/view/${contactId}`);
				})
				.catch( err => dispatch( updateContactError( err ) ) )
		}
	}
}

const ContactContainer = connect( mapStateToProps, mapDispatchToProps )( ContactIndex );

export default ContactContainer;