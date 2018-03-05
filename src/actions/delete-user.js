
export function deleteUser(userId, i) {
  return {
    type: 'DELETE_USER',
    i,
    userId
  }
}
