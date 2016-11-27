import React from 'react';

class SignUp extends React.Component{
	render(){
		return(
			<form>
				<input type="text" placeholder="Name"/>
				<input type="email" placeholder="Email"/>
				<input type="password" placeholder="Password"/>
				<input type="submit" value="Sign Up!"/>
			</form>
		)
	}
}

export default SignUp;