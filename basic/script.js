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

console.log("Hello my name is Sun");
console.log("Hello my name is Nico");
console.log("Hello my name is June");
console.log("Hello my name is May");
console.log("Hello my name is April");
//인사하는게 너무 반복적이고 길다.(복붙을 많이하고있음)
//위의 코드에서 바뀌는 것은 이름부분일 뿐이다.
function sayHello() {
  //여기에 작성하는 것이 sayHello의 함수를 실행할 때마다 실행된다.
  console.log("Hello");
}
//함수를 3번 실행
sayHello();
sayHello();
sayHello(); //Hello가 3번 출력된다.
//인수를 주어 함수를 통해 어떠한 값(데이터)을 보낼 수도 있다.
//인수는 여러개 줄 수 있다.
function hello(name, age) {
  console.log("Hello my name is " + name + ". I'm " + age + " years old.");
}
hello("sun", 23);
hello("Nico", 100);
hello(); //함수에서는 인수를 주었는데 호출할 때 값을 넣어주지 않으면 undefined가 뜬다.
//함수로 계산기 만들기
function plus(a, b) {
  console.log(a + b);
}
plus(); //NaN출력
plus(1, 2);
plus("Java", "Script");
//xxx.xx()형식의 함수 만들기 (지금까지의 함수는 xx()형식이였다.)
const eat = {
  favorite: "meet",
  fruit: function (otherFruit) {
    console.log("apple");
    console.log(otherFruit);
  },
};
console.log(eat.favorite);
eat.fruit(); //두개의 데이터가 출력되지만 두번째는 undifined로 출력된다.
eat.fruit("grape");
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b); //a를 b의 갯수만큼 곱한다.
  },
};
calculator.add(1, 7);
calculator.minus(10, 10);
calculator.divide(8, 4);
calculator.powerOf(2, 3); //8
