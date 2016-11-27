import React from 'react';

const styles = {
	header: {
		paddingTop: 25,
		paddingLeft: 25
	}
}


class Header extends React.Component{
	render(){
		return(
			<h1 style={styles.header}>Work Contact</h1>
		)
	}
}

export default Header;