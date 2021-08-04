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
const yourHeight = 163;
console.log(yourHeight);
yourHeight = 180;
console.log(yourHeight);
