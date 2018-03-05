import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import * as actionCreators from './actions/all-user-actions';
import * as actionCreators from "./actions/all-user-actions";
import {createUser} from "./actions/create-user";

import UserList from './components/user-list';

function mapStateToProps(state){
  return{
    users: state.data,
  }
}


function mapDispatchToProps(dispatch){
  console.log(actionCreators);
  return bindActionCreators(actionCreators, dispatch);
}

const CrudListStore = connect(mapStateToProps,mapDispatchToProps)(UserList);
// console.log("fewrferfrferfe",CrudListStore);
export {CrudListStore};
