function auth( state ={}, action ) {
	switch( action.type ) {
		case 'SIGN_IN':
			return state;
		case 'SIGN_UP_SUCCESS':
			return { ...state, success: true, message: action.payload };
		case 'SIGN_UP_ERROR':
			return { ...state, success: false, message: action.payload };
		case 'SIGN_UP_ERROR_RESET':
			return { ...state, success: true, message: '' };
		default:
			return state;
	}
}

export default auth;