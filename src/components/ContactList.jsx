import React from 'react';
import Contact from './Contact';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = {
	desktopHeight: {
		height: '45vh'
	},
	mobileHeight: {
		height: '35vh'
	}
}

class ContactList extends React.Component{
	render(){
		let con = [];
		const sortedContacts = {};
		const contacts = {...this.props.contacts};
		const keys = Object.keys(contacts);
		const sortedKeys = keys.sort( (current, next) => {
			return contacts[current].name.toLowerCase() > contacts[next].name.toLowerCase();
		})
		sortedKeys.map ( (key) => {
			return sortedContacts[key] = contacts[key];
		})

		Object.keys(sortedContacts).map( (contact) => {
			if (sortedContacts[contact].name.toLowerCase().indexOf(this.props.contactFilter) === -1 ) {
				return;
			}
			con.push(
				<Contact 
					contacts={ sortedContacts[contact] } 
					key={contact}
					index={contact}
					isMobile={ this.props.isMobile }
					setContactBrowserDisplay={ (e) => this.props.setContactBrowserDisplay(e) }
					loadContactDetails={ (e) => this.props.loadContactDetails(e) }
					setContactKey={ (e) => this.props.setContactKey(e) } 
					setContactAddDisplay={ (e) => this.props.setContactAddDisplay(e) } 
				/>
			)
		});

		return(
			<Scrollbars autoHide style={ this.props.isMobile ? styles.mobileHeight : styles.desktopHeight }>
				{con}
			</Scrollbars>
		)
	}
}

export default ContactList;