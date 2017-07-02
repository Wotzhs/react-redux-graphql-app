import decode from 'jwt-decode';

export function setCurrentUser( token ){
	return {
		type: 'SET_CURRENT_USER',
		user: decode( token )
	}
}