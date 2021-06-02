"use strict";

class UserStorage {
  // 서버 데이터
  // static: 외부에서 클래그 안 변수를 바로 접근하고 싶을 때 사용(정적 변수로 만들어야함)
  // 다른 곳에서 볼 수 없게 개인화 해야함(은닉화): #
  static #users = {
    id: ["HID1", "HID2", "HID3"],
    psword: ["123", "1234", "12345"],
    name: ["이름1", "이름2", "이름3"],
  };

  // 은닉화 된 변수를 메소드로 전달 함
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  };

  static getUserInfo (id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
};

module.exports = UserStorage;
