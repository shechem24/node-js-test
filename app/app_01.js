// lecture 1
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {                     // 서버 루트 경로 지정 없으면 무한 로딩
//   res.send("여기는 루트입니다.");
// });


// app.get("/login", (req, res) => {
//   res.send("여기는 로그인 화면입니다.");
// })


// app.listen(3000, function () {                     // 서버 열기
//   console.log("서버 가동");
// });

// lecture 2
// express를 사용해야하는 이유
// html 사용 단점: 한글 깨짐 → 처리 필요
// const http = require('http');  // http: 내장 모듈
// const app2 = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});  // 한글처리
//   // console.log(req.url)                                // 콘솔로 입력된 루트경로 이후 url 출력해줌
//   if (req.url === "/") {                                  // express와 달리 if문으로 경로 처리해줘야함
//     res.end("여기는 루트 입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다.");
//   }
// });


// app2.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// })

