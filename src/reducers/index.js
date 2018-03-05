import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import posts from './posts';
// import users from './users';
// import initialData from './initialData';
import users from './users';

// const data = !state?initialData:users;

// const rootReducer = combineReducers({users});

const rootReducer = combineReducers({data:users, routing: routerReducer });

export default rootReducer;
