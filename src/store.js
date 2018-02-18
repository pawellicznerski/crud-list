import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index';
import initialUsers from './data/initial-users';

const browserHistory = createBrowserHistory();
// import the root reducer


// create an object for the default data
const defaultState = {
  users:initialUsers
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
