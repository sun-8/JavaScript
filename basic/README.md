# JavaScript (script.js)

브라우저의 f12 console에서 JS를 다룰 수 있다.  
브라우저의 console은 JS와 상호작용 하기에는 좋지만 긴 JS프로그램을 작성해야한다면 유용하지 않다.  
브라우저의 console은 JS의 잘못된 부분(에러)을 알려주기도 한다.  
console.log는 console에 무언가를 log(기록)한다는 뜻이다.

### Data Type(number,String)-3

브라우저의 console에서 정수+정수 / 정수+실수 / 실수+실수 / 문자열 +문자열 / 문자열+숫자 를 실행할 수 있다.  
단, 문자열은 "" 또는 '' 사이에 표기해야 하며 ""+''와 같기 혼용하면 안된다.  
'hello'+1은 1이 문자열로 바뀌어 "hello1"이 출력된다.

### Variable-8

Variable은 값을 저장하거나 유지하는 역할  
코드 작성량을 줄이기 위해, 에러를 적게 내기 위해, 시간을 단축하기 위해  
JAVA와는 다르게 모든 타입을 저장할 수 있다.  
const: constant(상수) - 바뀌지 않는 값(계속 유지)  
let: 값을 변경 가능

### Data Type(boolean,null,undefined)-19

true or false (true=1, false=0)
예,아니오로 대답해야할 때 사용한다.

null은 변수에 데이터 값이 아무것도 없다는 뜻이다.

undefined는 변수에 값이 정의되어 있지 않다는 뜻이다.  
즉 컴퓨터 메모리 안에는 존재하지만(공간은 있지만),값이 들어가있지 않다.

null과 undefined의 차이!!

- null은 '없다'는 뜻을 가진 값을 주었고, undefined는 값을 주지 않았다.

### Array-26

데이터를 효율적으로 정리하는 방법 중 하나 - 항목을 나열한다.[]

array안에서 데이터 찾는방법?!

- 데이터를 찾을 때는 앞에서부터 숫자를 붙여 그 숫자로 찾는다.
- 시작은 1이 아닌 0부터 시작한다.
- 없는 숫자를 찾으려 하면 undefined라며 오류가 생긴다.

To Do List를 만들 때 할일 항목들을 저장할 것으로 array를 사용한다.

기존의 만든 array에서 데이터를 추가할 수 있는데 맨 끝에 저장된다.

### Object-34

Object는 Property를 가진 데이터를 저장해주며 Array와 비슷하지만 다르다.

Array와 Object의 차이!!

- Array는 [] / Object는 {}
- Array는 설명이 필요하지 않은 데이터를 저장할 때 / Object는 설명이 필요한 데이터를 저장할 때

const는 변경할 수 없는데 const로 정의된 Object의 Property는 변경이 가능???

- Object 안의 무언가를 수정,추가하는 것이기 때문에 const의 영항이 미치지 않는다.
- const 전체를 하나의 값으로서 변경하려고 할 때 에러가 발생한다.

### Function-61

Function은 계속 반복해서 사용할 수 있는 코드조각이다.  
어떤 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해준다.  
Function은 어떤 일을 수행하거나, 어떤 일을 수행하고 결과를 반환해준다.  
xxx.xx()로 되어있는 형식이 함수이다.  
Object의 xxx.xx는 ()가 없는 숫자나 문자열 혹은 다른 데이터 타입이 들어있는 것이였다.

연산이 있는 함수를 호출하려 할 때 인수값을 아무것도 주지 않으면 NaN이 출력되는데 이는 Not a Number라는 뜻이다.

Function 안에 있는 console.log는 console에 결과를 표시를 해주는데 결과를 console이 아닌 화면에 출력한다던지, 무언가를 변경한다던지, 데이터를 받아서 사용할 수 있다.  
또한 Function으로 무언가를 해서 그 function으로부터 결과 값을 얻을 수 있다.

Function 안에서 무언가를 return하면, Function을 저장한 변수를 실행할 때 return 되어 있는 값을 가져온다.  
한 번 return하면 해당 함수는 끝난다.(return 이후의 코드는 동작하지 않음)  
Function이 return이 아닌 console.log로 정의되어있다면 Function을 저장한 변수를 실행할 때 undefined라고 출력된다.  
되도록이면 console.log가 아닌 return을 사용하는 것이 효율적이다.

prompt() function은 사용자에게 창을 띄울 수 있게 해준다.(질문에 대한 답을 얻고자 할 때 사용)  
값이 출력되는 type은 무조건 String이다.  
prompt function을 잘 사용하지 않는 이유?!

- prompt() function이 실행되는 동안 js코드의 실행을 멈추게 한다.
- message가 그닥 예쁘지 않은데다가 css를 적용시킬 수 없다.
- 어떤 브라우저는 이런 팝업을 제안하기도 해서 이 함수는 굉장히 옛날방식이다.
- cancel(취소)를 누르면 값이 null으로 출력된다.

isNaN() function은 받은 인자가 NaN인지 아닌지 boolean타입으로 반환하여 알려준다.

- true라면 숫자가 아니라는 뜻
- false라면 숫자가 맞다는 뜻

### Conditional-148

Conditional(조건문)은 true인지 false인지 알려준다.  
예를들어, 사용자가 로그인이 되어있다면 무언가를 보여준다던지, 사용자가 무언가를 할 때 반응하는 것이 있다.  
if문은 true면 실행된다.(~가 참이라면)  
if문은 위에서부터 실행되기 때문에 순서를 잘 정해서 작성해야한다.

==은 문자열이 같다는 뜻이고, ===은 문자열,데이터 타입 모두 같다는 뜻이다.

&&은 AND연산자이다.  
피연산자 && 피연산자 식으로 되어있으며, 두 개의 피연산자가 모두 true일 때만 true로 반환한다.  
하나라도 false일 때는 false를 반환한다.

||는 OR연산자이다.  
피연산자 || 피연산지 식으로 되어있으며, 두 개의 피연산지 중 하나라도 true이면 true를 반환한다.

AND / OR 연산자를 사용할 때 신경써야할 점?!

- OR 연산자는 앞에서부터 검사하기 때문에 앞의 피연산자가 true이면 뒤의 피연산자는 검사하지 않고 true를 반환한다.
- AND 연산자도 역시 앞에서부터 검사하기 때문에 앞의 피연산자가 false이면 뒤의 피연산자는 검사하지 않고 false를 반환한다.
- 즉, 코드의 효율성을 높이기 위해 앞의 피연산자를 자주 사용자가 자주 쓰는 것이나 대중적인 것을 작성해야 한다는 것이다.
