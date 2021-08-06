alert("hi");

//브라우저의 console에게 메시지를 보낸다. ()안에는 숫자나 문자열을 넣을 수 있다.
console.log(55555);
console.log("hello");
console.log("yes");

//let은 const와는 다르게 값을 변경할 수 있다.
let myName = "sun";
console.log(myName);
myName = "cloud";
console.log(myName);
//Uncaught TypeError: Assignment to constant variable.
//const yourHeight = 163;
//console.log(yourHeight);
//yourHeight = 180;
//console.log(yourHeight);

const amIPretty = true;
console.log(amIPretty);
const isyourBoyfriendHandsome = null;
console.log(isyourBoyfriendHandsome);
let human;
console.log(human);

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//[]를 붙이면 array가 된다.
//[]안에 저장되는 data Type은 상관없다.
console.log(dayOfWeek);
console.log(dayOfWeek[4]); //금요일 찾기
dayOfWeek.push("sun"); // 데이터 추가
console.log(dayOfWeek); //데이터 추가 후 출력

const playerName = "sun";
const playerPoints = 10000;
const playerPretty = true;
const playerFat = "little bit";
//Name,Points,Pretty,Fat특성들이 모두 player에 대해서 설명하고 있다.
//이 데이터들를 가능한 최선으로 정리한다.
const player1 = ["sun", 10000, true, "little bit"];
//array를 쓰는 것이 좋은 방법은 아니다. -> 각 데이터들이 무슨 의미인지 모르기 때문!!
const player = {
  //주제(Object==player)에 맞는 특성을 작성
  name: "sun",
  points: 10000,
  pretty: true,
  fat: "little bit",
};
console.log(player);
console.log(player.name);
console.log(player["name"]); //위의 코드와 같은 기능
//Object의 property 변경
player.points = player.points + 10000;
console.log(player);
//Object의 property추가
player.level = 163;
console.log(player);
//Uncaught TypeError: Assignment to constant variable.
//player = true;
