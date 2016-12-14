import React from 'react';
import Contact from './Contact';


class ContactList extends React.Component{

	showContactDetails() {
		this.props.toggleDisplay();
		this.props.contactDetails();
	}

	render(){
		let con = [];
		this.props.contacts.data.map( (contact, index) => {
			if (contact.name.toLowerCase().indexOf(this.props.contactFilter) === -1 ) {
				return;
			}
			con.push(<Contact contacts={ contact } key={index} toggleDisplay={ (e) => this.showContactDetails(e) } />)
		});

		return(
			<div>
				{con}
			</div>
		)
	}
}

export default ContactList;