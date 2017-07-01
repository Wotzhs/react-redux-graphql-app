import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import '../vendor/skeleton/normalize.css';
import '../vendor/skeleton/skeleton.css';
import './index.css';

import BaseLayout from './components/BaseLayout';
import App from './components/App';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={BaseLayout}>
					<IndexRoute component={LandingPage} />
					<Route path="signup" component={SignUp} />
					<Route path="signin" component={SignIn} />
					<Route path="home" component={App} />
					<Route path="*" component={NotFound} />
				</Route>
			</Router>
		</Provider>
	)
}

render(<Root />, document.getElementById('root'));
