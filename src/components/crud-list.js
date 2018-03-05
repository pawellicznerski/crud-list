import React, {Component} from "react";
// import Table from './table/table.js';
// import Toolbar from './toolbar/toolbar.js';
// import Header from './header/header.js';
import { Router, Route, Link } from "react-router-dom";
// import _ from 'lodash';
import {CrudListStore} from './../crud-list-store.js';
import {history} from './../store';

// class UserList extends Component {
//   render(){
//     return (
//       <div>
//         <Header/>
//         <Toolbar/>
//         <Table/>
//       </div>
//     )
//   }
// }
//
// export {UserList};


export default class CrudList extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     data:'',
  //     sortby:'',
  //     descending:false,
  //     warning:''
  //   }
  // }
  // {this.state.data.length?'':noUsersInfo}
  render(){
    return (
        <Router history={history}>
          <div className="userlist">
            <Route path="/" component={CrudListStore}/>
          </div>
        </Router>
    )
  }

  // <Route path="/deleteUser" component={}/>
  // <Route path="/editUser" component={}/>
  // <Route path="/readUser" component={}/>
}



  //
  // render(){
  //   const noUsersInfo = <span>No users</span>;
  //   return (
  //     <div className="userlist">
  //       <Header/>
  //       <Toolbar
  //         data={this.state.data}
  //         warning={this.state.warning}
  //         updateData={this.updateData.bind(this)}
  //       ></Toolbar>
  //       <Table
  //         data={this.state.data}
  //         deleteUser={this.deleteUser.bind(this)}
  //         sortTable={this.sortTable.bind(this)}
  //         sortby={this.state.sortby}
  //         descending={this.state.descending}
  //       ></Table>
  //       {this.state.data.length?'':noUsersInfo}
  //     </div>
  //   )
  // }
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CrudListStore from './../crud-list-store.js';
// import React, {Component} from "react";
// // import createBrowserHistory from 'history/createBrowserHistory';
// import {Provider} from 'react-redux';
// import store, {history} from './../store';

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

// const CrudList =()=>{
//   return(
//     <Provider store={store} >
//       <Router history={history}>
//         <Route path="/" component={CrudListStore}/>
//       </Router>
//     </Provider>
//   )
// }
//
// export default CrudList;
