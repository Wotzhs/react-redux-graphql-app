import React from 'react';

const styles = {
	container: {
		paddingTop: '8%'
	}
};


class SignUp extends React.Component{

	createAccount(event){
		event.preventDefault();
	}

	render(){
		return(
			<form style={styles.container} onSubmit={this.createAccount}>
				<div className="row">
					<div className="three columns">&ensp;</div>
					<div className="six columns">
						<input className="u-full-width" type="email" placeholder="Email"/>
					</div>
					<div className="three columns"></div>
				</div>
				<div className="row">
					<div className="three columns">&ensp;</div>
					<div className="six columns">
						<input className="u-full-width" type="password" placeholder="Password"/>
					</div>
					<div className="three columns"></div>
				</div>				
				<div className="row">
					<div className="three columns">&ensp;</div>
					<div className="six columns">
						<input className="button-primary" type="submit" value="Sign In!"/>
					</div>
					<div className="three columns"></div>
				</div>					
			</form>
		)
	}
}

export default SignUp;