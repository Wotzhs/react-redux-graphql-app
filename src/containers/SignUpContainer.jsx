import { connect } from 'react-redux';
import { signUp, signUpError, signUpResetErrorMessage } from '../actions/auth';

import SignUp from '../components/SignUp';

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signUp: signUpDetails => {
			dispatch( signUp( signUpDetails ) )
				.then( response => response.payload.data.status )
				.then( status => { 
					console.log(status);
					if ( !status ) { 
						dispatch( signUpError( 'Email has been taken' ) )
					}
				});
		},
		signUpErrorReset: () => {
			dispatch( signUpResetErrorMessage() );
		}
	}
}

const SignUpContainer = connect( mapStateToProps, mapDispatchToProps )( SignUp );

export default SignUpContainer;