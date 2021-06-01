"use strict";

// 프론트 엔드 파일 ////////////////////////////////////////////////////////

const id = document.querySelector("#id");   // #: 선택자
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);  // login: 함수

function login () {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  
  // REST API 사용
  // body:서버로 데이터 전달
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then(console.log);
  //.then((res) => console.log(res)); 함수안에 동일한 것을 넘길때는 생략해서 위와같이 작성 가능           // res.json()은 promise형태로 옴 → 받기위해 .then 필요함

};

