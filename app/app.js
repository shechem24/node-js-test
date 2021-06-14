"use strict";

// 모듈
const bodyParser = require("body-parser");  // TP middleware
const express = require("express");         // framework
const dotenv = require("dotenv");

dotenv.config();                            // process.env.환경변수 에 등록

const app = express();


// 라우팅
const home = require("./src/routes/home");  // index.js를 통해 여러 모듈을 한 번에 불러오기 가능

// 미들웨어 세팅
// view엔진 세팅 - ejs
app.set("views", "./src/views");  // (, 폴더명), 경로 설정
app.set("view engine", "ejs")     // ejs: 많이 사용하는 view 엔진

// express 정적 파일 주소 등록 → 주소 등론 이후 주소만 입력하면 파일사용 가능
app.use(express.static("./src/public"));
// app.use("/static", express.static(__dirname + "/src/public"));  // 가상 경로 설정 가능

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

// "/"로 시작하는 주소들에서 미들웨어 home을 적용
app.use("/", home) // use: 미들웨어를 등록해주는 메소드

module.exports = app;