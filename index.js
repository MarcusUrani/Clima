const apiKey = "723b8032aa7447ea875d53e0fb2b6c1e";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const getWeatherByLocation = async (city) => {
  const resp = await fetch(url(city), {
    origin: "cros",
  });
  const respData = await resp.json();
  addWeatherToPage(respData);
};

const addWeatherToPage = (data) => {
  search.value = "";
  if (data.cod === "404") {
    main.innerHTML = `<h1 class="main__error">Cidade não encontrada</h1>`;
  }
  const temp = Ktoc(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = `
  <h1 class="main__city--name">${data.name}</h1>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="main__weather--icon"/>
  <p class="main__weather">${data.weather[0].main}</p>
  <h2 class="main__temperature">${temp}°C</h2>
  <p class="main__humidity">Umidade do ar: ${data.main.humidity} %</p>
  <p class="main__wind">Velocidade do vento: ${data.wind.speed} km/h</p>
   `;
  //  cleanup
  main.innerHTML = "";
  main.appendChild(weather);
};

const Ktoc = (K) => {
  return Math.floor(K - 273.15);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeatherByLocation(city);
  }
});
