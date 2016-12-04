import React from 'react';

const styles = {
	padding15px: {
		padding: 15,
		fontFamily: 'fontAwesome'
	}
}

class ContactSearch extends React.Component{
	render(){
		return(
			<div style={ styles.padding15px }>
				<input type="text" placeholder="&#xf002;  Search..." className="u-full-width"/>
			</div>
		)
	}
}

export default ContactSearch;