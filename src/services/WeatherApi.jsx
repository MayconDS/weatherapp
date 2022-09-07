// Api base para informações sobre a cidade
const API_BASE = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "fa6f536b0cc2881dba96408707654b76";

// Api base para informações climáticas sobre a cidade
const API_BASE2 = "https://api.openweathermap.org/data/2.5/onecall?";
const API_KEY2 = "a5bb4718b30b6f58f58697997567fffa";

const getWeather = async (city) => {
  const response = await fetch(
    `${API_BASE}q=${city}&lang=pt_br&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  if (data.cod == 404) {
    document.querySelector("#alert-error").innerText = "Cidade não encontrada";
    const response = await fetch(
      `${API_BASE}q=${"Sao Paulo"}&lang=pt_br&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  } else {
    document.querySelector("#alert-error").innerText = "";

    return data;
  }
};

const getWeather2 = async (lon, lat) => {
  const response = await fetch(
    `${API_BASE2}appid=${API_KEY2}&lang=pt_br&exclude=minutely&units=metric&lon=${lon}&lat=${lat}`
  );
  const data = await response.json();
  return data;
};

export { getWeather2, getWeather };
