import React from 'react';
import { Link } from 'react-router';

const styles = {
	header: {
		paddingTop: 25,
		paddingLeft: '2vw'
	},
	noUnderline: {
		textDecoration: 'none'
	},
	loginButton: {
		marginRight: '2vw',
		marginTop: 10
	}
}


class Header extends React.Component{
	render(){
		return(
			<div className="row" style={ styles.header }>
					<h1 className="u-pull-left">
						<Link to={'/'} style={ styles.noUnderline }>Disconeq</Link>
					</h1>
					<Link to={'/'} className="button u-pull-right" style={ styles.loginButton } >Sign In</Link>
			</div>
		)
	}
}

export default Header;