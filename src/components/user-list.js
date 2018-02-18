import React, {Component} from "react";
import Table from './table/table.js';
import Toolbar from './toolbar/toolbar.js';
import Header from './header/header.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import _ from 'lodash';


export default class UserList extends Component {
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
    const noUsersInfo = <span>No users</span>;
      console.log(this);
    return (
      <div className="userlist">
        <Header/>
        <Toolbar></Toolbar>
        <Table></Table>
      </div>
    )
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
}
