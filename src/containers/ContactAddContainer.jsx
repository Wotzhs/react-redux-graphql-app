import { connect } from 'react-redux';
import { addContact, addContactSuccess, addContactError } from '../actions/contacts';
import ContactAdd from '../components/ContactAdd';

const mapDispatchToProps = dispatch => {
	return {
		addContact: contactDetails => {
			dispatch( addContact( contactDetails ) )
				.then( () => dispatch( addContactSuccess( 'Successfully added' ) ) )
				.catch( err => dispatch( addContactError( err ) ) );
		}
	}
}

const ContactAddContainer = connect( null, mapDispatchToProps )( ContactAdd );

export default ContactAddContainer;