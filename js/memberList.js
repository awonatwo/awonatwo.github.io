//load이벤트 핸들러
document.memberFrm.addEventListener("load", () => {
  renderMemberList();
});

class Member {
  constructor(
    _userId,
    _password,
    _userName,
    _ssn1,
    _email,
    _phone = { _tel1, _tel2, _tel3 }
  ) {
    this._userId = document.getElementById("userId").value;
    this._password = document.getElementById("pwd").value;
    this._userName = document.getElementById("userName").value;
    this._ssn1 = document.getElementById("ssn1").value;
    this._email = document.getElementById("email").value;
    this._tel1 = document.getElementById("tel1").value;
    this._tel2 = document.getElementById("tel2").value;
    this._tel3 = document.getElementById("tel3").value;
  }
}

/**
 * guestbook >> member
 * Guestbook >> Member
 * guestbooks >> memberList
 * renderGuestbook >> rederMemberList
 */
/**
 * 폼제출 - localStorage에 저장
 */
const saveGuestbook = () => {
  // 1. guestbook객체 생성
  const member = new Member(
    _userId,
    _password,
    _userName,
    _ssn1,
    _email,
    _tel1,
    _tel2,
    _tel3
  );
  console.log(member);

  // 2. 배열에 추가
  const memberList = JSON.parse(localStorage.getItem("memberList")) || [];
  // 대입문에 or연산자. 우항>좌항 대입해라. 좌항을 검사해 만약 null이면(undefined) false로 처리됨 그러면 []해줘. or연산자: 좌항이 false면 우항을 검사해.
  memberList.push(member);
  console.log(memberList);

  // 3. localStorage에 저장
  //     //JSON은 객체, 배열 둘다 안해도 맨 바깥에꺼 하나만 해주면됨.
  //     // localStorage.setItem("memberList", memberList);
  localStorage.setItem("memberList", JSON.stringify(memberList)); // JSON해야함.

  // 4. 초기화
  document.memberList.reset();

  // 5. 방명록 렌더링
  renderMemberList(memberList);
};

const datetimeFormatter = (date) => {
  const f = (n) => (n >= 10 ? n : "0" + n);
  const MM = f(date.getMonth() + 1);
  const dd = f(date.getDate());
  const HH = f(date.getHours());
  const mm = f(date.getMinutes());
  return `${MM}/${dd} ${HH}:${mm}`;
};

const renderMemberList = (
  memberList = JSON.parse(localStorage.getItem("memberList")) // 기본값 줘서 window.onload때 undefined방지.
) => {
  const tbody = document.querySelector("#tbl-member tbody");
  tbody.innerHTML = ""; // 기존코드 제거

  //optional chaining ?앞에 변수가 undefined/null일때도 오류를 유발하지 않음.
  memberList?.reverse(); // 역순 정렬

  if (memberList) {
    memberList.forEach((_member, index) => {
      tbody.innerHTML += `
          <tr>
              <td>${index + 1}</td>
              <td>${username}</td>
              <td>${content}</td>
              <td>${datetimeFormatter(new Date(datetime))}</td>
          </tr>
          `;
    });
  } else {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">등록된 방명록이 없습니다.</td></tr>`;
  }
};
