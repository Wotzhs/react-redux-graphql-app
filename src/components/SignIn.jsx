import React from 'react';
import { browserHistory } from 'react-router';

const styles = {
	container: {
		paddingTop: '8%'
	}
};


class SignUp extends React.Component{

	createAccount(event){
		event.preventDefault();
		console.log(this.email.value);
		console.log(this.password.value);
		// browserHistory.push('/home');
	}

	render(){
		return(
			<form style={styles.container} onSubmit={ (e) => this.createAccount(e) }>
				<div className="row">
					<div className="three columns">&ensp;</div>
					<div className="six columns">
						<input ref={ (input) => this.email = input } className="u-full-width" type="email" placeholder="Email"/>
					</div>
					<div className="three columns"></div>
				</div>
				<div className="row">
					<div className="three columns">&ensp;</div>
					<div className="six columns">
						<input ref={ (input) => this.password = input } className="u-full-width" type="password" placeholder="Password"/>
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