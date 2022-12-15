document.memberFrm.onsubmit = function () {
  //1.아이디검사
  //첫글자는 반드시 영소문자로 이루어지고,
  if (!/^[a-z]/.test(userId.value)) {
    alert("ID : 첫글자는 반드시 영소문자로 입력해주세요.");
    userId.select();
    return false;
  }
  //숫자가 하나이상 포함되어야함.
  if (!/\d+/.test(userId.value)) {
    alert("ID : 숫자를 하나 이상 입력해주세요.");
    userId.select();
    return false;
  }
  //아이디의 길이는 4~12글자사이
  if (!/^.{4,12}$/.test(userId.value)) {
    alert("ID : 길이는 4 ~ 12자 사이로 입력해주세요.");
    userId.select();
    return false;
  }
  //2.비밀번호 확인 검사
  //숫자/문자/특수문자(!&*) 포함 형태의 8~15자리 이내의 암호 정규식
  //8~15자리
  if (!/^[a-z0-9!&*]{8,15}$/i.test(pwd.value)) {
    alert("PASSWORD : 8~15자 사이로 입력해주세요.");
    pwd.select();
    return false;
  }
  //영문자 하나이상 포함
  if (!/[a-z]/i.test(pwd.value)) {
    alert("PASSWORD : 영문자 1글자 이상 입력해주세요.");
    pwd.select();
    return false;
  }
  //숫자 하나이상 포함
  if (!/[0-9]/.test(pwd.value)) {
    alert("PASSWORD : 숫자 1글자 이상 입력해주세요.");
    pwd.select();
    return false;
  }
  //특수문자(!&*) 하나이상 포함
  if (!/[!&*]/.test(pwd.value)) {
    alert("PASSWORD : 특수문자 1글자 이상 입력해주세요.");
    pwd.select();
    return false;
  }

  //비밀번호일치여부 검사
  if (pwdCheck.value !== pwd.value) {
    alert("비밀번호가 일치하지 않습니다.");
    pwd.select();
    return false;
  }

  //3.이름검사 : 한글만 2글자 이상만 허용.
  if (!/^[가-힣]{2,}$/.test(userName.value)) {
    alert("이름 : 한글로 2자리 이상만 입력해주세요.");
    userName.select();
    return false;
  }

  //4.주민번호체크 숫자만. ss1:6자리, -포함, ss2:7자리
  if (!/^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(ssn1.value)) {
    alert("주민등록번호 : 6자리숫자만 가능합니다.");
    ssn1.select();
    return false;
  }

  if (!/^[1-4]\d{6}$/.test(ssn2.value)) {
    alert("주민등록번호 : 7자리숫자만 가능합니다.");
    ssn2.select();
    return false;
  }

  //5.이메일 검사 @앞에가 영문자 숫자로 4~12글자
  if (!/^[0-9a-z]{4,12}@[a-z]+\.[a-z]+/i.test(email.value)) {
    //             /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,
    // (\.\w+){1,3} : (.com) | (.co.kr) | (.c.k.r)
    alert(
      "EMAIL : @앞은 영문자,숫자로 4 ~ 12글자, @뒤는 양식에 맞게 입력하세요. 예) asdf@google.com"
    );
    email.select();
    return false;
  }

  //6-1. 전화번호 검사 : tel1 : 숫자만가능, 2자리수 이상
  if (!/^\d{2,}$/.test(tel1.value)) {
    alert("전화번호 : 숫자만 2자리 이상 입력하세요.");
    tel1.select();
    return false;
  }

  //6-2. 전화번호 검사 : tel2 : 숫자만가능, 3자리수 이상
  if (!/^\d{3,}$/.test(tel2.value)) {
    alert("전화번호 : 숫자만 3자리 이상 입력하세요.");
    tel2.select();
    return false;
  }

  //6-3. 전화번호 검사 : tel3 : 숫자만가능, 4자리만 입력.
  if (!/^\d{4}$/.test(tel3.value)) {
    alert("전화번호 : 숫자4자리만 입력하세요.");
    tel3.select();
    return false;
  }

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

  if (idVal) {
    alert(`${idVal}님 회원가입 축하합니다. 인덱스로 이동합니다.`);
    location.href = "./index.html";
  }
};
