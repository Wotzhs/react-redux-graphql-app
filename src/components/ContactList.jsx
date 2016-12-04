import React from 'react';

const styles = {
	padding15px: {
		padding: '0px 15px 15px 15px'
	}
}

class ContactList extends React.Component{
	render(){
		return(
			<div style={ styles.padding15px }>
				this is the contact list.
			</div>
		)
	}
}

export default ContactList;