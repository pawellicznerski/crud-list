
export function changeUser(index,userName,userEmail) {
  return {
    type: 'CHANGE_USER',
    userName,
    userEmail
  }
}

// export function changeEmail(index,userName,userEmail) {
//   return {
//     type: 'CHANGE_EMAIL',
//     userName,
//     userEmail
//   }
// }

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
