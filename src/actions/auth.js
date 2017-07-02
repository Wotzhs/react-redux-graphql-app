import axios from 'axios';

const authAPI = 'http://localhost:4000/api/signup';

export function signIn( credentials ) {
	return {
		type: 'SIGN_IN',
	}
}

export function signUp( signUpDetails ) {
	const request = axios.post( authAPI, signUpDetails );
	return {
		type: 'SIGN_UP',
		payload: request
	}
}

export function signUpSuccess( message ) {
	return {
		type: 'SIGN_UP_SUCCESS',
		message
	}
}

export function signUpError( message ) {
	return {
		type: 'SIGN_UP_ERROR',
		payload: message
	}
}

export function signUpResetErrorMessage(){
	return {
		type: 'SIGN_UP_ERROR_RESET'
	}
}