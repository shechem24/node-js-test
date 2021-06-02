"use strict";

// 프론트 엔드 파일 ////////////////////////////////////////////////////////

const id = document.querySelector("#id");   // #: 선택자
const name = document.querySelector("#name");
const psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);  // register: 함수

function register () {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (!psword.value) return alert("비밀번호를 입력해주십시오.");
  if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };
    
  // REST API 사용
  // body:서버로 데이터 전달
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = "/login";
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("회원가입 중 에러 발생"));  // 에러처리
  })
  // .then(console.log);
  //.then((res) => console.log(res)); 함수안에 동일한 것을 넘길때는 생략해서 위와같이 작성 가능           // res.json()은 promise형태로 옴 → 받기위해 .then 필요함

};

