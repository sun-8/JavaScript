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
