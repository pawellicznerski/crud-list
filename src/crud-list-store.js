import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/action-creators';
import UserList from './components/user-list';

function mapStateToProps(state){
  return{
    users: state.users,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const CrudListStore = connect(mapStateToProps,mapDispatchToProps)(UserList);

export default CrudListStore;
