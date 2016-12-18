import React from 'react';
import { Link } from 'react-router';

const styles = {
	header: {
		paddingTop: 25,
		paddingLeft: '2vw',
	},
	noUnderline: {
		textDecoration: 'none',
		position: 'fixed',
		left: 30
	},
	loginButton: {
		marginRight: '2vw',
		marginTop: 10,
		position: 'fixed',
		right: 30
	},
	logo: {
		fontSize: '2.2em'
	}
}


class Header extends React.Component{
	render(){
		return(
			<div className="row header" style={ styles.header } >
				<span style={ styles.logo } >
					<Link to={'/'} style={ styles.noUnderline }>Disconeq</Link>
				</span>
				<Link to={'/signin'} className="button" style={ styles.loginButton } >Sign In</Link>
			</div>
		)
	}
}

export default Header;