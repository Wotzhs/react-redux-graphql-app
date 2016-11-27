import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../vendor/skeleton/normalize.css';
import '../vendor/skeleton/skeleton.css';
import './index.css';

import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import ContactContainer from './components/ContactContainer';
import AddContact from './components/AddContact';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<Router history={browserHistory}>
			<Route path="/">
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
