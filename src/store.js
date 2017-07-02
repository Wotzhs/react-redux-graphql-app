import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
	contacts : {},
	currentUser: { name: '', email: '' },
	auth: { success: true, message: '' },
	signIn: { message: '' }
};

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

const store = createStoreWithMiddleware( rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export const history = syncHistoryWithStore( browserHistory, store );

export default store;