"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  home,  // 키만 넣어주면, 동일한 이름의 키:값 으로 들어감
  login,
};