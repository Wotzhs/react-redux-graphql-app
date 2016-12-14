import React from 'react';

const styles = {
	padding15px: {
		padding: '5px 15px 0px 15px',
		cursor: 'pointer'
	},
	contactName: {
		display: 'block',
		fontWeight: 'bold'
	},
	contactNumber: {
		display: 'block'
	},
	contactNameNumber: {
		paddingTop: 3,
		paddingLeft: 10,
		float: 'left',
		width: '73%'
	},
}

class Contact extends React.Component{
	render() {
		return(
			<div className="row" style={styles.padding15px} onClick={ (e) => this.props.toggleDisplay(e)}>
				<div style={ styles.contactNameNumber }>
					<span style={ styles.contactName }>{this.props.contacts.name}</span>
					<span style={ styles.contactNumber }>{this.props.contacts.tel}</span>
				</div>
			</div>
		)
	}
}

export default Contact;