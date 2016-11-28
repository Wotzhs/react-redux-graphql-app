import React from 'react';
import { Link } from 'react-router';

const styles = {
	header: {
		paddingTop: 25,
		paddingLeft: 25
	},
	noUnderline: {
		textDecoration: 'none'
	}
}


class Header extends React.Component{
	render(){
		return(
			<h1 style={ styles.header }>
				<Link to={'/'} style={ styles.noUnderline }>Work Contact</Link>
			</h1>
		)
	}
}

export default Header;