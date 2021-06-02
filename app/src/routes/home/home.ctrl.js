"use strict";

const User = require("../../models/User")

// API로 만드는 중
const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);  // 인스턴스 형태
    const response = user.login();
    // console.log(response);
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};