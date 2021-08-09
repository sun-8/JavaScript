//console창에 입력하지않고 JS파일에 입력하면 HTML의 title이 어떻게 되어있던 간에 변경한 값으로 title이 된다.
document.title = "with HTML";
//id에 해당하는 코드를 title변수에 저장 후 console에 출력(첫번째것만 가져온다)
const title = document.getElementById("title");
console.log(title); //저장한 id에 대한 코드를 출력한다.
console.dir(title); //console.dir()은 element를 더 자세하게 출력한다.
title.innerText = "Got you!"; //id에 해당하는 코드의 text내용을 변경했다.
//JS에서 h1에 해당하는 모든 속성을 알 수 있다.
console.log(title.id);
console.log(title.className);
//class에 해당하는 코드를 hellos변수에 저장 후 console에 출력
const hellos = document.getElementsByClassName("hello");
console.log(hellos); //class="hello"에 해당하는 것들이 출력된다.
//모든 h1을 hi변수에 저장한다. - 모든 h1을 불러오기 때문에 내가 원하는 h1만 불러올 수 없다.
const h1 = document.getElementsByTagName("h1");
console.log(h1);
//querySelecter는 element를 CSS방식으로 검사할 수 있다.(. # > :first-child)
const hi = document.querySelector(".hi h1"); //class를 나타내주는 .사용 후 해당 태그 작성
console.log(hi);
const firstElemet = document.querySelector("#title");
console.log(firstElemet); //querySelecter()는 검색결과가 여러개여도 가장 첫번째만 가져온다.
//모두 가져오고 싶다?!
const allElement = document.querySelectorAll(".hello");
console.log(allElement);

//console.dir(title)로 봤을 때 style의 color속성이 있는데 그것을 변경했다. -> 글자색이 지정한 색으로 바뀜
title.style.color = "blue";
//함수를 호출하면 console에 text가 출력된다.
function handTitleClick() {
  console.log("title was clicked!!!");
}
//함수를 호출하면 글자색이 빨간색으로 변하고 경고창을 띄운다.
function eventHellos() {
  hi.style.color = "red"; //색 바뀌는걸 먼저 작성해도 alert가 먼저 실행되었다.
  alert("love yourself");
}
//함수를 호출하면 console창에 text가 출력된다.
function handleMouseEnter() {
  console.log("Mouse is here~");
}
//함수를 호출하면 text가 바뀐다.
function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}
//함수 호출하면 배경색이 바뀐다.
function handleWindowResize() {
  document.body.style.backgroundColor = "coral";
}
//함수 호출하면 경고창이 뜬다.
function handleWindowCopy() {
  alert("copier!!");
}
//함수 호출하면 경고창이 뜬다.
function handleWindowOffline() {
  alert("SOS no WIFI!!");
}
function handleWindowOnline() {
  alert("ALL GOOD~");
}
//addEventLister()는 말 그대로 event를 listen하는 것이다.
title.addEventListener("click", handTitleClick); //함수에 ()넣지말아야 한다.
//해당하는 곳에 click하기를 listen해서 click하면 지정한 함수가 실행된다.
//여러개를 가리키는 변수(배열)는 적용할 수 없다.
hi.addEventListener("click", eventHellos);
//마우스 오버 시 함수호출하여 이벤트 발생
title.addEventListener("mouseenter", handleMouseEnter);
//다른 형식으로 event를 줄 수 있다.
title.onmouseleave = handleMouseLeave;
//윈도우 화면의 크기가 달라지면(좁아지던 넓어지던 상관없음) 함수 호출
window.addEventListener("resize", handleWindowResize);
//화면에 해당하는 모든 것들을 ctrl+c하면 함수 호출
window.addEventListener("copy", handleWindowCopy);
//와이파이에 연결이 안되어있다면 함수 호출
window.addEventListener("offline", handleWindowOffline);
//와이파이에 연결이 안되어있다면 함수 호출 -> 끝고 다시 연결해야 실행된다.
window.addEventListener("online", handleWindowOnline);

//text를 클릭했을 때 빨강,파랑으로 색이 번갈아가며 바뀌기
const h33 = document.getElementById("h3"); //아이디 값을 가져와서 변수에 저장
function clickclick() {
  const currentColor = h33.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h33.style.color = newColor; //newColor에 저장된 색을 h33.style.color에 저장
}
//h33를 클릭할 때 이벤트 발생
h33.addEventListener("click", clickclick);
