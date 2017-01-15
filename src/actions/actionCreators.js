// add contact
export function addContact( contactId, name, email, tel, organization, comment ) {
	return {
		type: 'ADD_CONTACT',
		contactId,
		name,
		email,
		tel,
		organization,
		comment
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