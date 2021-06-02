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

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;                // 모든 값 반환

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;

  }

  // 은닉화 된 변수를 메소드로 전달 함
  static getUsers(isAll, ...fields) {
    return fs               // 프로미스로 반환
    .readFile("./src/databases/users.json")
    .then((data) => {
      return this.#getUsers(data, isAll, fields);
    })
    .catch(console.error);
  };

  static getUserInfo (id) {
    return fs               // 프로미스로 반환
    .readFile("./src/databases/users.json")
    .then((data) => {
      return this.#getUserInfo(data, id);
    })
    .catch(console.error);  // catch((err) => console.error(err)) 파라미터로 넘어온 변수를 실행시키는 함수로 똑같이 넘기는 경우 생략 가능
  };

  static async save (userInfo) {
    const users = await this.getUsers(true);  // true: 모든 데이터
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";    // 에러구문. 문자열 대신 Error("에러구문")으로 할 경우 object라는 이름으로 나옴
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { success: true};
  }
};

module.exports = UserStorage;
