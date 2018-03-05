
export function updateUser(index,userName,userEmail) {
  return {
    type: 'UPDATE_USER',
    userName,
    userEmail
  }
}
