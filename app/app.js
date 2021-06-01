"use strict";

// lecture 3: 하드코딩으로 로그인 만들기

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// // 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");  // (, 폴더명), 경로 설정
app.set("view engine", "ejs") // ejs: 많이 사용하는 view 엔진
// app.use(express.static("C:/Users/wlsrm/Downloads/JavaScript/node-js/test-code/node-js-test/app/src/public"));
app.use(express.static("./src/public"));  // 미들웨어 등록
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home) // use: 미들웨어를 등록해주는 메소드

module.exports = app;