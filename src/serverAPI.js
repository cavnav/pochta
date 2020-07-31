
class serverAPIclass {
  users = [{ userId: 1000, userName: 'asdf', userRoles: 'aaa, bbb, ccc' }];

  getUsers() {
    // return fetch('/users/get');

    return new Promise((resolve) => setTimeout(() => resolve(this.users), 3000));
  }
  addUser({ user, resolve }) {

  }
  removeUser({ userId }) {

  }
  updateUser({ userId, resolve }) {

  }
}

export const serverAPI = new serverAPIclass();