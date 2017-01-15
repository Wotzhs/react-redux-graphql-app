import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import sampleContacts from './mock/data.js';

const defaultState = {
	sampleContacts
}

const store = createStore( rootReducer, defaultState );

export const history = syncHistoryWithStore( browserHistory, store );

export default store;