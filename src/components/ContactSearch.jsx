import React from 'react';
import { Icon } from 'react-fa';

const styles = {
	padding15px: {
		padding: 15,
		fontFamily: 'fontAwesome'
	},
	clearButton: {
		paddingRight: 10,
		marginTop: -42,
		position: 'relative',
		cursor: 'pointer'
	}
}

class ContactSearch extends React.Component{
	render(){
		return(
			<div style={ styles.padding15px }>
				<input type="text" placeholder="&#xf002;  Search..." className="u-full-width"/>
				<Icon name="times" className="u-pull-right" style={ styles.clearButton }/>
			</div>
		)
	}
}

export default ContactSearch;