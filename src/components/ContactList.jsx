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

		let contactList = [];
		if ( this.props.contacts.hasOwnProperty('list') ) {
			this.props.contacts.list.map( (contact, index) => {
				contactList.push(
					<Contact 
						contacts={ contact } 
						key={index}
						isMobile={ this.props.isMobile }
						setContactBrowserDisplay={ (e) => this.props.setContactBrowserDisplay(e) }
						loadContactDetails={ (e) => this.props.loadContactDetails(e) }
						setContactKey={ (e) => this.props.setContactKey(e) } 
						setContactAddDisplay={ (e) => this.props.setContactAddDisplay(e) } 
					/>
				);
			});
		}
		
		return(
			<Scrollbars autoHide style={ this.props.isMobile ? styles.mobileHeight : styles.desktopHeight }>
				{contactList}
			</Scrollbars>
		)
	}
}

export default ContactList;