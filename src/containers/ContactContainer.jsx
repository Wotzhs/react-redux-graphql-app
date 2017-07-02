import { connect } from 'react-redux';
import { loadContacts, loadContactsSuccess } from '../actions/contacts';
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
		}
	}
}

const ContactContainer = connect( mapStateToProps, mapDispatchToProps )( ContactIndex );

export default ContactContainer;