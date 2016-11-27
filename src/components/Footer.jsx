import React from 'react';

const styles = {
	rightAlign: {
		textAlign: 'right',
		paddingRight: 25
	},
	profile: {
		textDecoration: 'none'
	}
}

class Footer extends React.Component{
	render(){
		return(
			<div style={styles.rightAlign}>&copy; 2016 by
				<a href="#" style={styles.profile}> TzeHsiung Wong</a>
			</div>
		)
	}
}

export default Footer;