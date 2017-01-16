function contacts( state = {}, action ) {
	console.log(state);
	switch( action.type ) {
		case 'ADD_CONTACT' :
			const timestamp = Date.now();
			return {...state, [`contact-${timestamp}`]: action.contactDetails } ;
		default:
			return state;
	}
}

export default contacts;