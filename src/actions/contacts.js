// add contact
export function addContact( contactDetails ) {
	return {
		type: 'ADD_CONTACT',
		contactDetails,
	}
}

// edit contact
export function editContact( contactId ) {
	return {
		type: 'EDIT_CONTACT',
		contactId
	}
}

// delete contact
export function deleteContact( contactId ) {
	return {
		type: 'REMOVE_CONTACT',
		contactId
	}	
}