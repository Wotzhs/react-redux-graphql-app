import React from 'react';
import { Link } from 'react-router';

const styles = {
	centered: {
		textAlign: 'center'
	},
	blockHeight: {
		paddingTop: '15vh',
		height: '80vh'
	}
}

class LandingPageIntro extends React.Component{
	render(){
		return(
			<div style={ styles.blockHeight }>
				<h3 style={ styles.centered }>Just like Facebook for your friend, LinkedIn for your colleague</h3>
				<h5 style={ styles.centered }>Now your phonebook is no longer cluttered with work contacts</h5>
				<div style={ styles.centered }>
					<Link to={'/signup'} className="button button-primary">Get Started</Link>
				</div>
			</div>
		)
	}
}

export default LandingPageIntro;