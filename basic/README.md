# JavaScript (script.js)

브라우저의 f12 console에서 JS를 다룰 수 있다.  
브라우저의 console은 JS와 상호작용 하기에는 좋지만 긴 JS프로그램을 작성해야한다면 유용하지 않다.  
브라우저의 console은 JS의 잘못된 부분(에러)을 알려주기도 한다.

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
xxx.xx()로 되어있는 형식이 함수이다.  
Object의 xxx.xx는 ()가 없는 숫자나 문자열 혹은 다른 데이터 타입이 들어있는 것이였다.

연산이 있는 함수를 호출하려 할 때 인수값을 아무것도 주지 않으면 NaN이 출력되는데 이는 Not a Number라는 뜻이다.
