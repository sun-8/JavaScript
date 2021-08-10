const API_KEY = "3466d537bdc3242cc3b76375b0c02842";

function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.main.temp}/${data.weather[0].main}`;
      city.innerText = data.name;
    })
  ); //...??
}

function onGetError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGetError);
//getCurrentPosition함수는 2개의 인수가 필요하다.
//하나는 모든게 잘됐을 때 (success했을 때) 실행될 함수, 나머지 하나는 에러가 발생했을 때 실행될 함수이다.
