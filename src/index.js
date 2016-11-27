import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../vendor/skeleton/normalize.css';
import '../vendor/skeleton/skeleton.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import ContactContainer from './components/ContactContainer';
import AddContact from './components/AddContact';
import NotFound from './components/NotFound';

const styles = {
	contentDefault: {
		minHeight: '75vh',
		marginLeft: 25
	},
	thin: {
		marginTop: 0,
		marginBottom: 10
	}
}

class BaseLayout extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<div style={styles.contentDefault}>{this.props.children}</div>
				<hr style={styles.thin}/>
				<Footer className="footer" />
			</div>
		)
	}
}

const Root = () => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={BaseLayout}>
				<IndexRoute component={LandingPage} />
				<Route path="signup" component={SignUp} />
				<Route path="home">
					<IndexRoute component={ContactContainer} />
					<Route path="add" component={AddContact} />
				</Route>
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	)
}

render(<Root />, document.getElementById('root'));
