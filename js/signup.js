/**
 * web storage에 저장된 key, value 모두 string이다.
 *
 * JSON Javascript Object Notation
 * - 다른 프로그램 간에 데이터를 주고받기 위한 형식언어
 * - JSON.stringify(jsObj):jsonStr      jsObj -> json : 웹으로. 자바를 제이슨으로
 * - JSON.parse(jsonStr):jsObj          json -> jsObj : 제이슨 문자열을 속성이나 배열참조해서 자바스크립트객체로 바꾸려면.
 *
 *
 */

//회원가입
document.memberFrm.onsubmit = function () {
  //   const arr = [1, 2, 3];
  //   console.log(JSON.stringify(arr), typeof JSON.stringify(arr));
  //   localStorage.setItem("arr", JSON.stringify(arr));
  //   console.log(localStorage.getItem("arr")); // '[1,2,3]'

  //   const arr2 = JSON.parse(localStorage.getItem("arr"));
  //   console.log(arr2); // [1,2,3] js object
  //   console.log(arr2[0]); // 1

  const idVal = document.getElementById("userId").value;
  const pwVal = document.getElementById("pwd").value;
  const nameVal = document.getElementById("userName").value;
  const ssn1Val = document.getElementById("ssn1").value;
  const ssn2Val = document.getElementById("ssn2").value;
  const emailVal = document.getElementById("email").value;
  const tel1Val = document.getElementById("tel1").value;
  const tel2Val = document.getElementById("tel2").value;
  const tel3Val = document.getElementById("tel3").value;

  const user = {
    id: idVal,
    password: pwVal,
    name: nameVal,
    ssn: [ssn1Val, ssn2Val],
    email: emailVal,
    tel: [tel1Val, tel2Val, tel3Val],
  };
  console.log(JSON.stringify(user), typeof JSON.stringify(user));
  localStorage.setItem("user", JSON.stringify(user));

  const user2 = JSON.parse(localStorage.getItem("user"));
  console.log(user2, typeof user2);

  // if (idVal) {
  //   alert(`${idVal}님 회원가입 축하합니다. 인덱스로 이동합니다.`);
  //   location.href = "./index.html";
  // }
};
