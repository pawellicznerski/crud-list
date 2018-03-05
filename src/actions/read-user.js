
export function readUser(userId, i) {
  return {
    type: 'READ_USER',
    i,
    userId
  }
}
