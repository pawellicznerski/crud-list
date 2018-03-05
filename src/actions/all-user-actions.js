// import {createUser} from "./create-user";
// import {deleteUser} from "./delete-user";
// import {fetchInitialData} from "./fetch-initialData";
// import {readUser} from "./read-user";
// import {updateUser} from "./update-user";
//
// export default {createUser,deleteUser,readUser,updateUser,fetchInitialData};
export function fetchInitialData(dispatch) {
  console.log("fetch initial data");

  return function(dispatch){
    // console.log("dupa");
        dispatch({type: 'FETCH_INITIAL-DATA_PENDING'})
          fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
           .then(data => {
               if(data.length!==0){
                 dispatch({
                   type: 'FETCH_INITIAL-DATA_FULLFILED',
                   data:data
                 })
               } else if (data.length===0){
                 console.log("Failed to download data from server");
               }
             })
            .catch((error)=>{
              dispatch({
                type: 'FETCH_INITIAL-DATA_REJECTED',
              })
            })
        }
}
export function showPopup(userId, i, userName, userEmail) {
  return {
    type: 'SHOW_POPUP',
    userId,
    i,
    userName,
    userEmail
  }
}
export function createUser(userId, userName, userEmail) {
  return {
    type: 'CREATE_USER',
    userId,
    userName,
    userEmail
  }
}

export function deleteUser(userId, i) {
  return {
    type: 'DELETE_USER',
    i,
    userId
  }
}

export function readUser(userId, i) {
  return {
    type: 'READ_USER',
    i,
    userId
  }
}

export function updateUser(index,userName,userEmail) {
  return {
    type: 'UPDATE_USER',
    userName,
    userEmail
  }
}
