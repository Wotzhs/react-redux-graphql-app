import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import ContactContainer from './ContactContainer';

function mapStateToProps( state ) {
	return {
		contacts: state.contacts
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( actionCreators, dispatch );
}

const App = connect( mapStateToProps, mapDispatchToProps )(ContactContainer);

export default App;