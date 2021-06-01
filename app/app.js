"use strict";

// lecture 3: 하드코딩으로 로그인 만들기

// 모듈
const express = require("express");
const app = express();

// // 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");  // (, 폴더명), 경로 설정
app.set("view engine", "ejs") // ejs: 많이 사용하는 view 엔진
// app.use(express.static("C:/Users/wlsrm/Downloads/JavaScript/node-js/test-code/node-js-test/app/src/public"));
app.use(express.static("./src/public"));

app.use("/", home) // use: 미들웨어를 등록해주는 메소드

module.exports = app;