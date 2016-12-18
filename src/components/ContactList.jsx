import React from 'react';
import Contact from './Contact';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = {
	listHeight: {
		height: '45vh'
	}
}

class ContactList extends React.Component{

	render(){
		let con = [];
		Object.keys(this.props.contacts).map( (contact) => {
			if (this.props.contacts[contact].name.toLowerCase().indexOf(this.props.contactFilter) === -1 ) {
				return;
			}
			con.push(
				<Contact 
					contacts={ this.props.contacts[contact] } 
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
			<Scrollbars autoHide style={ styles.listHeight }>
				{con}
			</Scrollbars>
		)
	}
}

export default ContactList;