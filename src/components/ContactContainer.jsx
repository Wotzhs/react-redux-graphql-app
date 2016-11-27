import React from 'react';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

class ContactContainer extends React.Component{
	render(){
		return(
			<div>
				<h1>This is the container for contact container</h1>
				<ContactSearch />
				<ContactList />
				<ContactDetails />
			</div>
		)
	}
}

export default ContactContainer;