import React from 'react';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

const styles = {
	bordered: {
		border: '1px black solid',
		backgroundColor: 'white'
	},
	leftPadding25px: {
		paddingLeft: '1vw',
		paddingRight: '1vw'
	}
}

class ContactContainer extends React.Component{
	render(){
		return(
			<div className="row" style={ styles.leftPadding25px }>
				<div className="four columns" style={ styles.bordered }>
					<ContactSearch />
					<ContactList />
				</div>
				<div className="eight columns">
					<ContactDetails />
				</div>
			</div>
		)
	}
}

export default ContactContainer;