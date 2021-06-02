"use strict";

const fs = require("fs").promises;

class UserStorage {
  // 서버 데이터
  // static: 외부에서 클래그 안 변수를 바로 접근하고 싶을 때 사용(정적 변수로 만들어야함)
  // 다른 곳에서 볼 수 없게 개인화 해야함(은닉화): #
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
        
    return userInfo;
  }
  
  // 은닉화 된 변수를 메소드로 전달 함
  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  };

  static getUserInfo (id) {
    return fs               // 프로미스로 반환
    .readFile("./src/databases/users.json")
    .then((data) => {
      return this.#getUserInfo(data, id);
    })
    .catch(console.error);  // catch((err) => console.error(err)) 파라미터로 넘어온 변수를 실행시키는 함수로 똑같이 넘기는 경우 생략 가능
  };

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
};

module.exports = UserStorage;
