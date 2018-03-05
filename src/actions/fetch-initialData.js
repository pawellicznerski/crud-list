export function fetchInitialData(dispatch) {
  console.log("fetch initial data");

  return function(dispatch){
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
export function createUser(userId, userName, userEmail) {
  return {
    type: 'CREATE_USER',
    userId,
    userName,
    userEmail
  }
}
//
// store.dispatch((dispatch)=>{
//   dispatch({type: 'FETCH_INITIAL-DATA_PENDING'})
//     fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
//      .then(data => {
//          if(data.length!==0){
//            dispatch({
//              type: 'FETCH_INITIAL-DATA_FULLFILED',
//              data:data
//            })
//          } else if (data.length===0){
//            console.log("Failed to download data from server");
//          }
//        })
//       .catch((error)=>{
//         dispatch({
//           type: 'FETCH_INITIAL-DATA_REJECTED',
//         })
//       })
// })
