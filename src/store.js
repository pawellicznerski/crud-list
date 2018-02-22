import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import { syncHistoryWithStore} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
// import initialUsers from './data/initial-users';

const browserHistory = createBrowserHistory();
// import the root reducer


// create an object for the default data
const defaultState = {
  users:''
};
const middleware = applyMiddleware(createLogger(),thunk)
const store = createStore(rootReducer, defaultState,middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
