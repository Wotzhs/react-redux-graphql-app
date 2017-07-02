import axios from 'axios';
const contactAPI = 'http://localhost:4001/api';

axios.defaults.headers.common['x-access-token'] = localStorage.getItem( 'userToken' );

export function addContact( contactDetails ) {
	return {
		type: 'ADD_CONTACT',
		contactDetails,
	}
}

export function editContact( contactId ) {
	return {
		type: 'EDIT_CONTACT',
		contactId
	}
}

export function deleteContact( contactId ) {
	return {
		type: 'REMOVE_CONTACT',
		contactId
	}	
}

export function loadContacts() {
	const request = axios.get( `${contactAPI}/contacts` );
	// const contact = {
	// 	name: 'brother',
	// 	user: '5958bb352a8a332eb03fa8a9'
	// }
	// const request = axios.post( `${contactAPI}/contacts`, contact);
	return {
		type: 'LOAD_CONTACTS',
		payload: request
	}
}

export function loadContactsSuccess( contacts ) {
	return {
		type: 'LOAD_CONTACTS_SUCCESS',
		contacts
	}
}