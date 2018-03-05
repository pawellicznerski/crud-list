
export function createUser(userId, userName, userEmail) {
  return {
    type: 'CREATE_USER',
    userId,
    userName,
    userEmail
  }
}
