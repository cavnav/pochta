
class serverAPIclass {
  users = [];

  getNewUserId = this.userIdGen();

  getUsers() {
    // return fetch('/users/get');

    return new Promise((resolve) => setTimeout(() => resolve([...this.users]), 3000));
  }
  addUser() {
    // return fetch('/users/add');

    const newUser = this.createUser();
    this.users.push(newUser);

    return new Promise((resolve) => setTimeout(() => resolve({ ...newUser }), 1000));
  }
  removeUser({ userId }) {

  }
  updateUser({ userId, resolve }) {

  }

  * userIdGen() {
    let newId = 1000;
    while(true) yield newId++;
  }

  createUser() {
    return {
      userId: this.getNewUserId.next().value,
      userName: '',
      userRoles: [],
    }
  }
}

export const serverAPI = new serverAPIclass();