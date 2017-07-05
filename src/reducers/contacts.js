function contacts( state = {}, action ) {
	switch( action.type ) {
		case 'ADD_CONTACT_SUCCESS':
			return { ...state, refetch: true }
		case 'ADD_CONTACT_ERROR':
			return { ...state, refetch: false}
		case 'UPDATE_CONTACT_SUCCESS':
			return { ...state, refetch: true }
		case 'UPDATE_CONTACT_ERROR':
			return { ...state, refetch: false }
		case 'DELETE_CONTACT' :
			return { ...state };
		case 'LOAD_CONTACTS_SUCCESS' :
			return { ...state, list: action.contacts, refetch: false };
		default:
			return state;
	}
}

export default contacts;