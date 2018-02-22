import _ from 'lodash';

function users(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [{
        user: action.author,
        // email:email
      },...state];
    case 'REMOVE_COMMENT':
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
    case 'SHOW_USER' :
      console.log("Incrementing Follows!!");
      return [
        ...state.slice(0,action.index), // before the one we are updating
        {...state[action.index], follows: state[action.index].follows + 1},
        ...state.slice(action.index + 1), // after the one we are updatings
      ]
    case 'FETCH_INITIAL-DATA' :
      console.log("Incrementing Follows!!");
      return [
        ...action.data
      ]
    default:
      return state;
  }
}

function updateData(newData){
  const data= this.state.data?this.state.data:[];
  data.push(newData);
  this.setState({data:data,warning:"" })
  fetch(`https://jsonplaceholder.typicode.com/users`, {
          method : 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify(newData)
      });
}

function deleteUser(id){
  const data= this.state.data?this.state.data:[]
  _.remove(data, item => item.id === id);
  this.setState({data:data,warning:[false,"You have successfully removed a user"]})
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method : 'DELETE',
      });
}

function sortTable(itemId){
  let data = Array.from(this.state.data);
  const descending = this.state.sortby === itemId && !this.state.descending;
  data.sort((a,b)=>{
    return ( descending
      ?((a[itemId]>b[itemId])? 1:-1)
      :((a[itemId]<b[itemId])? 1:-1)
    )});

  this.setState({
    data:data,
    sortby:itemId,
    descending:descending
  })
}

export default users;
