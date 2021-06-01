"use strict";

// 서버 데이터
const users = {
  id: ["HID1", "HID2", "HID3"],
  psword: ["123", "1234", "12345"],
};


// API로 만드는 중
const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
      const id = req.body.id;
      const psword = req.body.psword;
      // console.log(id, psword);

      if (users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if (users.psword[idx] === psword) {
          return res.json({
            success: true,

          })
        }
      }
      // 프론트 엔드로 결과 보내줌
      return res.json({
        success: false,
        msg: "로그인에 실패하셨습니다."
      })
  },
};

// const home = (req, res) => {
//   res.render("home/index");
// };

// const login = (req, res) => {
//   res.render("home/login");
// };


module.exports = {
  output,
  process,
};