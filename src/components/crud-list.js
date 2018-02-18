import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CrudListStore from './../crud-list-store.js';
import React, {Component} from "react";
// import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import store, {history} from './../store';

// const history = createBrowserHistory();


// export default class CrudList extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//     }
//   }
//
//
//   render(){
//     const noUsersInfo = <span>No users</span>;
//     return (
//
//     )
//   }
// }

const CrudList =()=>{
  return(
    <Provider store={store} >
      <Router history={history}>
        <Route path="/" component={CrudListStore}/>
      </Router>
    </Provider>
  )
}

export default CrudList;
