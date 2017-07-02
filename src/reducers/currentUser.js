function currentUser( state ={}, action ) {
	switch( action.type ) {
		case 'SET_CURRENT_USER':
			return { ...state, name: action.user.name, email: action.user.email }
		default:
			return state;
	}
}

export default currentUser;