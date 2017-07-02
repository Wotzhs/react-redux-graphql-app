function contacts( state = {}, action ) {
	switch( action.type ) {
		case 'ADD_CONTACT' :
			const timestamp = Date.now();
			return { ...state, allContacts: { ...state.allContacts, [`contact-${timestamp}`]: action.contactDetails } };
		case 'EDIT_CONTACT' :
			return { ...state, [ action.contactId ] : action.contactUpdatedDetails };
		case 'DELETE_CONTACT' :
			return { ...state };
		case 'LOAD_CONTACTS_SUCCESS' :
			return { ...state, list: action.contacts  };
		default:
			return state;
	}
}

export default contacts;