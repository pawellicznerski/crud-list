import _ from 'lodash';

function users(state = [], action) {
  switch(action.type) {
    case 'CREATE_USER':
      return [{
        user: action.user,
        // email:email
      },...state];
    case 'DELETE_USER':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    case 'EDIT_USER' :
      // console.log("Incrementing Likes!!");
      // console.log(state);
      return [
        ...state.slice(0,action.index), // before the one we are updating
        {...state[action.index], likes: state[action.index].likes + 1},
        ...state.slice(action.index + 1), // after the one we are updatings
      ]
    case 'EDIT_EMAIL' :
      // console.log("Incrementing Likes!!");
      // console.log(state);
      return [
        ...state.slice(0,action.index), // before the one we are updating
        {...state[action.index], likes: state[action.index].likes + 1},
        ...state.slice(action.index + 1), // after the one we are updatings
      ]
    case 'FETCH_INITIAL-DATA_PENDING' :
      // console.log("gggggggFETCH_INITIAL-DATA_PENDING!!");
      return [
        ...state
      ]
    case 'FETCH_INITIAL-DATA_FULLFILED' :
      // console.log("ggggggggggFETCH_INITIAL-DATA_FULLFILED!");
      return [
        ...state,
        ...action.data
      ]
    case 'FETCH_INITIAL-DATA_REJECTED' :
      // console.log("ggggggggggFETCH_INITIAL-DATA_REJECTED!");
      return [
        ...state,
      ]
    default:
      return state;
  }
}

// function updateData(newData){
//   const data= this.state.data?this.state.data:[];
//   data.push(newData);
//   this.setState({data:data,warning:"" })
//   fetch(`https://jsonplaceholder.typicode.com/users`, {
//           method : 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//             },
//           body: JSON.stringify(newData)
//       });
// }
//
// function deleteUser(id){
//   const data= this.state.data?this.state.data:[]
//   _.remove(data, item => item.id === id);
//   this.setState({data:data,warning:[false,"You have successfully removed a user"]})
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//           method : 'DELETE',
//       });
// }
//
// function sortTable(itemId){
//   let data = Array.from(this.state.data);
//   const descending = this.state.sortby === itemId && !this.state.descending;
//   data.sort((a,b)=>{
//     return ( descending
//       ?((a[itemId]>b[itemId])? 1:-1)
//       :((a[itemId]<b[itemId])? 1:-1)
//     )});
//
//   this.setState({
//     data:data,
//     sortby:itemId,
//     descending:descending
//   })
// }

export default users;
