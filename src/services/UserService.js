class UserService {
  constructor() {
    this.user = null
  }

  getUser() {
    return this.user;
  }

  setUser(username) {
    this.user = username;
  }

  logout() {
    this.user = null
  }
}

module.exports = UserService
