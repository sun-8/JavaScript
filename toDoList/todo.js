const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //JSON함수로 인해 string으로 변환
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //target은 클릭된 HTML element이다.(button - x)
  //parentElement는 클릭된 HTML의 부모를 가리킨다.(li)
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //li 태그를 생성한다.
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❤";

  button.addEventListener("click", deleteToDo); //삭제하는 버튼 클릭하면 이벤트 발생

  li.appendChild(span); //span이 li의 자식이 되었다.
  li.appendChild(button);
  toDoList.appendChild(li); //화면에 list생성된다
}

function handleToDoSubmit(event) {
  event.preventDefault(); //새로고침이 안됨
  //입력한 것이 newTodo에 저장되고 비워짐
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //toDoInput.value를 비웠다고 해서 newTodo도 비워지는 것이 아니다.(둘은 별개)
  toDos.push(newTodo); //배열에 저장
  paintToDo(newTodo); //함수 호출하여 입력한 값을 보내줌
  saveToDos(); //입력한 값저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos); //JSON함수로 배열로 만들었다.
  console.log(parseToDos);
  parseToDos.forEach((item) => console.log("this is thie turn of", item)); //sayHello()을 간단하게 바꾼 것 -> github histroy보기
}
