"use strict";

const db = require("../config/db");

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

  };

  // 보안을 위해서 id=?, [id] 사용함
  // 데이터 읽기 성공/실패 확인을 위해 promise를 사용해야함(fs는 자체적으로 있었음)
  static getUserInfo (id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id=?;";
      db.query(query, [id],(err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      })
    })
  };

  static async save (userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query,
        [userInfo.id, userInfo.name, userInfo.psword],
        (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      })
    })
  }
};

module.exports = UserStorage;
