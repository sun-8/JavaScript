# JavaScript (index.html / script.js)

HTML은 CSS와 JavaScript를 가져온다.  
JavaScript를 사용하는 이유는 HTML과 상호작용하기 위해서이다.  
즉 HTML의 Element들을 JavaScript를 통해 변경하고 읽을 수 있다는 뜻이다.

### Document-11 / 1

document는 JS에서 HTML에 접근할 수 있는 방법이다.(document==website[HTML])  
JS에서 document객체로부터 HTML에서 작성한 것들을 가지고 올 수 있다.

console창에 document.title이라고 작성하면 HTML의 title이 출력된다.  
document.title="with HTML"이라고 작성하면 HTML의 title이 with HTML로 변경된다.  
하지만 이 변경은 브라우저를 새로고침하면 원래대로 돌아온다.(js파일에 작성해야함)  
console.dir()은 element를 더 자세하게 출력한다.

document.body는 HTML의 body항목만 가져온다.

document.location은 HTML이 어느 경로에 위치하고있는지 알려준다.

document.getElementById("id입력")은 해당 id에 대한 코드를 보여준다.  
첫번째 id만 가져와서 보여준다.

document.getElementByClassName("class입력")은 해당 class이름에 대한 코드를 보여준다.

document.getElementByTagName("tag입력")은 해당 tag가 있는 코드를 모두 가져와 보여준다.

document.querySelecter("검색할 것")은 검색에 해당하는 코드를 하나만 보여준다.(여러 개 있다면 첫번째 것을 보여줌)  
찾지 못하면 null이 출력된다.

document.querySelecterAll("검색할 것")은 검색에 해당하는 모든 코드를 array형식으로 보여준다.

### Events- / 26

console.dir()로 element의 JS Object를 자세히 봤을 때 on으로 사작하는 것들이 있다.  
이것들은 Event이다.  
JS에서 대부분의 작업은 Event를 listen하는 것이다.  
Event란, 어떠한 행동을 했을 때 이루어지는 작업이다.  
ex) click,mouseover,enter,입력끝내기,이름적기

HTML element.addEventListener("사용할 이벤트",이벤트가 실행되었을 때의 작업)은 이벤트를 주는 기본적인 코드이다.
