import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';

import createHistory from "history/createBrowserHistory"
import { syncHistoryWithStore} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
// import initialUsers from './data/initial-users';
// import fetchInitialData from './actions/fetch-initialData';

const browserHistory = createBrowserHistory();
// create an object for the default data
// const defaultState = {
//   users:''
// };
const middleware = applyMiddleware(createLogger(),thunk)
const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

// store.dispatch((dispatch)=>{
//   dispatch({type: 'FETCH_INITIAL-DATA_PENDING'})
//     fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
//       .then(data => {
//         dispatch({
//          type: 'FETCH_INITIAL-DATA_FULLFILED',
//          data:data
//         })
//       })
//       .catch((error)=>{
//         dispatch({
//           type: 'FETCH_INITIAL-DATA_REJECTED',
//         })
//       })
// })
