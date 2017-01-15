// add contact
export function add( contactId, name, email, tel, organization, comment ) {
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
export function edit( contactId ) {
	return {
		type: 'EDIT_CONTACT',
		contactId
	}
}

// delete contact
export function delete( contactId ) {
	return {
		type: 'REMOVE_CONTACT',
		contactId
	}	
}