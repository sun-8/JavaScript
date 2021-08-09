# JavaScript (index.html / script.js)

HTML은 CSS와 JavaScript를 가져온다.  
JavaScript를 사용하는 이유는 HTML과 상호작용하기 위해서이다.  
즉 HTML의 Element들을 JavaScript를 통해 변경하고 읽을 수 있다는 뜻이다.

### Document-11 / 1

document는 JS에서 HTML에 접근할 수 있는 방법이다.(document==website[HTML])  
JS에서 document객체로부터 HTML에서 작성한 것들을 가지고 올 수 있다.

console창에 document.title이라고 작성하면 HTML의 title이 출력된다.

- document.title="with HTML"이라고 작성하면 HTML의 title이 with HTML로 변경된다.  
  하지만 이 변경은 브라우저를 새로고침하면 원래대로 돌아온다.(js파일에 작성해야함)

- console.dir()은 element를 더 자세하게 출력한다.

- document.body는 HTML의 body항목만 가져온다.

- document.location은 HTML이 어느 경로에 위치하고있는지 알려준다.

- document.getElementById("id입력")은 해당 id에 대한 코드를 보여준다.  
  첫번째 id만 가져와서 보여준다.

- document.getElementByClassName("class입력")은 해당 class이름에 대한 코드를 보여준다.

- document.getElementByTagName("tag입력")은 해당 tag가 있는 코드를 모두 가져와 보여준다.

- document.querySelecter("검색할 것")은 검색에 해당하는 코드를 하나만 보여준다.  
   (여러 개 있다면 첫번째 것을 보여줌) 찾지 못하면 null이 출력된다.
- document.querySelecterAll("검색할 것")은 검색에 해당하는 모든 코드를 array형식으로 보여준다.

### Events- / 26

console.dir()로 element의 JS Object를 자세히 봤을 때 on으로 사작하는 것들이 있다.  
이것들은 Event이다.  
JS에서 대부분의 작업은 Event를 listen하는 것이다.  
Event란, 어떠한 행동을 했을 때 이루어지는 작업이다.  
ex) click,mouseover,enter,입력끝내기,이름적기

listen 하고 싶은 Event를 website에서 찾는 방법!!

1. google에 찾고싶은 element의 이름(ex]h1)+html element mdn을 검색한다.
2. mdn의 링크에 WebAPIs라는 문장이 포함된 사이트를 찾는다.(JS관점의 HTML Element라는 뜻)
3. 사이트에 들어가서 Event부분을 찾는다.

listen 하고 싶은 Event를 Element에서 찾는 방법!!

1. console.dir(element);해서 element를 console에 출력시켜준다.
2. 사용 가능한 이벤트를 찾는다.(on으로 시작하는 것)
3. 사용할 때는 앞의 on을 떼고 사용해야 한다.(onclick -> click)

- HTML element.addEventListener("사용할 이벤트",이벤트가 실행되었을 때의 작업)은 이벤트를 주는 기본적인 코드이다.
- 다른 방식으로는 HTML element.on이벤트이름=함수 로 작성할 수 있다.
- 첫번째 방법은 나중에 removeEventListener로 event를 삭제할 수 있다.

Event 종류?!

- click - 클릭하면
- mouseenter - 마우스오버하면
- mouseleave - 마우스를 떼면
- resize - 화면크기가 바뀌면(좁아지던 넓어지던 상관없음)
- copy - 복사하면
- offline - 인터넷 연결이 끊겨있으면
- online - 인터넷 연결이 되있으면 (끊고 연결해야 실행됨)

### CSS in JS-23 / 78

JS로 CSS기능을 구현할 수 있지만 꾸며주는 것은 한쪽에서만 해주는 것이 좋은 것 같다.  
JS는 상호작용을 만들어 내는 데에 가장 적합한 것 같다.
