import React from 'react';

const styles = {
	rightAlign: {
		textAlign: 'right',
		paddingRight: 25,
	},
	profile: {
		textDecoration: 'none'
	}
}

class Footer extends React.Component{
	render(){
		return(
			<div style={styles.rightAlign}>&copy; {new Date().getFullYear()}
				<a href="#" style={styles.profile}> Disconeq</a>
			</div>
		)
	}
}

export default Footer;