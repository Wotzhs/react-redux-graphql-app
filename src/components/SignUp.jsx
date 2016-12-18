import React from 'react';

const styles = {
	container: {
		padding: '7% 5vw 0 5vw',
	}
};


class SignUp extends React.Component{

	createAccount(event){
		event.preventDefault();
		const userAccount = {
			name    : this.name.value,
			email   : this.email.value,
			password: this.password.value
		}
		console.log(userAccount);

	}

	render(){
		return(
			<form style={styles.container} onSubmit={ (e) => this.createAccount(e)}>
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input ref={ (input) => this.name = input} className="u-full-width" type="text" placeholder="Name"/>
					</div>
				</div>
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input ref={ (input) => this.email = input} className="u-full-width" type="email" placeholder="Email"/>
					</div>
				</div>
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input ref={ (input) => this.password = input} className="u-full-width" type="password" placeholder="Password"/>
					</div>
				</div>				
				<div className="row">
					<div className="offset-by-three columns six columns">
						<input className="button-primary" type="submit" value="Sign Up!"/>
					</div>
				</div>					
			</form>
		)
	}
}

export default SignUp;