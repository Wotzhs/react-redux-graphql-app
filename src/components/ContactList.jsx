import React from 'react';

const styles = {
	padding15px: {
		padding: '5px 15px 0px 15px',
		borderTop: '1px black solid',
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
	contactPhoto: {
		width: '15%',
		float: 'left',
		maxWidth: '13vw',
		minWidth: '20%'
	}
}

class ContactList extends React.Component{
	render(){
		return(
			<div className="row" style={styles.padding15px}>
				<div style={ styles.contactPhoto }>
					<img src="/default_avatar.jpg" alt="" className="u-max-full-width"/>
				</div>
				<div style={ styles.contactNameNumber }>
					<span style={ styles.contactName }>Wong Tze Hsiung</span>
					<span style={ styles.contactNumber }>016-9983022</span>
				</div>
			</div>
		)
	}
}

export default ContactList;