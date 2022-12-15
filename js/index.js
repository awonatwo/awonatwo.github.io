let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = [
    "awonchoi",
    "Project HTML",
    "Project css",
    "Project javascript",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}
// console.log(selectStringArr);

//typing reset
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//print by a word
function dynamic(randomArr) {
  // console.log(randomArr);
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

// dynamic(selectStringArr);
// console.log(selectString);
// console.log(selectStringArr);

//cursor blinking
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
