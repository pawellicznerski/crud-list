import React, {Component} from "react";
import Table from './table/table.js';
import Toolbar from './toolbar/toolbar.js';
import Header from './header/header.js';
import _ from 'lodash';


export default class UserList extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Toolbar {...this.props}/>
        <Table {...this.props}/>
      </div>
    )
  }
}

// export class UserList extends Component {
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
