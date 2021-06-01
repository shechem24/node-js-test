"use strict";

const app = require("../app_02")

const PORT = 3000;

// 서버를 띄워주는 코드
app.listen(PORT, () => {                     // 서버 열기
  console.log("서버 가동");
});

