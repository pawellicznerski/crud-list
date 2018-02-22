
export function changeUser(index,userName,userEmail) {
  return {
    type: 'CHANGE_USER',
    userName,
    userEmail
  }
}

export function fetchIntialData(data) {
  console.log('dupa');
  return {
    type: 'FETCH_INITIAL-DATA',
    data: new Promise((resolve,reject)=>{
      fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
             .then(data => {
                 if(data.length!==0){
                   console.log('action-creators',data);
                   resolve(data);
                 } else if (data.length===0){
                   console.log("Failed to download data from server");
                 }
               })
             })
    }
  // dispatch => {
        // dispatch({
        //   type: 'FETCH_DATA',
        //   data:data,
        // })
  // }
}

// add comment
export function addUser(userId, userName,userEmail) {
  return {
    type: 'ADD_USER',
    userId,
    userName,
    userEmail
  }
}

// remove comment
export function removeUser(userId, i) {
  return {
    type: 'REMOVE_USER',
    i,
    userId
  }
}

// remove comment
export function showUser(userId, i) {
  return {
    type: 'SHOW_USER',
    i,
    userId
  }
}
