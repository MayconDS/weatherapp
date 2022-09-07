import { useState, useEffect } from "react";
import Forecast from "./componentes/Forecast";
import Highlights from "./componentes/Highlights";
import Today from "./componentes/Today";
import { getWeather, getWeather2 } from "./services/WeatherApi";

import { HiSearch } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { IoCloudSharp } from "react-icons/io5";

import "./styles/app.sass";
import Footer from "./componentes/Footer";

function App() {
  const [weather, setWeather] = useState([]);
  const [weather2, setWeather2] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [city, setCity] = useState("Sao Paulo");

  useEffect(() => {
    const loadWeather = async () => {
      let clima = [];
      let infoCity = [];
      infoCity.push(await getWeather(city));

      setWeather(infoCity);

      let lon = infoCity.map((item) => item["coord"].lon);
      let lat = infoCity.map((item) => item["coord"].lat);

      clima.push(await getWeather2(lon, lat));
      setWeather2(clima);
    };

    loadWeather();
  }, [buttonClicked]);

  let dt = weather.map((item) => item.dt);
  let sunr = weather.map((item) => item["sys"].sunrise);
  let suns = weather.map((item) => item["sys"].sunset);

  const sunrise = new Date(sunr * 1000);
  const sunset = new Date(suns * 1000);

  const date = new Date(dt[0] * 1000);
  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: weather.timezone,
  });
  const dayFormatter = Intl.DateTimeFormat([], {
    weekday: "long",
    timeZone: weather.timezone,
  });

  return (
    <main className="main">
      <div className="page-left">
        <span id="alert-error"></span>
        <div className="page-left-search">
          <HiSearch />
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Cidade"
          />
          <button onClick={() => setButtonClicked(!buttonClicked)}>
            Buscar
          </button>
        </div>

        {weather &&
          weather.map((item) => (
            <>
              <div className="page-left-icon">
                <img
                  src={
                    item["weather"].map((item) => item.description) ==
                    "chuva leve"
                      ? "https://hweather.netlify.app/weather_icons/10d.png"
                      : item["weather"].map((item) => item.description) ==
                        "nuvens nubladas"
                      ? "https://hweather.netlify.app/weather_icons/04n.png"
                      : item["weather"].map((item) => item.description) ==
                        "nublado"
                      ? "https://hweather.netlify.app/weather_icons/04d.png"
                      : item["weather"].map((item) => item.description) ==
                        "chuva moderada"
                      ? "https://hweather.netlify.app/weather_icons/10d.png"
                      : item["weather"].map((item) => item.description) ==
                        "algumas nuvens"
                      ? "https://hweather.netlify.app/weather_icons/02d.png"
                      : item["weather"].map((item) => item.description) ==
                        "céu limpo"
                      ? "https://hweather.netlify.app/weather_icons/01d.png"
                      : item["weather"].map((item) => item.description) ==
                        "nuvens dispersas"
                      ? "https://hweather.netlify.app/weather_icons/03d.png "
                      : item["weather"].map((item) => item.description) ==
                        "nublado"
                      ? "https://hweather.netlify.app/weather_icons/50d.png"
                      : ""
                  }
                />
              </div>
              <div className="page-left-weather-info">
                <div className="weather-graus">
                  <div className="temp">
                    <h2>
                      {item["main"].temp.toFixed(0)}
                      <span id="temp">°C</span>
                    </h2>
                  </div>
                  <span id="gray">Sensação {item["main"].feels_like}°C</span>
                  <div style={{ display: "flex" }} className="descriptionTemp">
                    <span
                      style={{
                        fontSize: "25px",
                        marginRight: "5px",
                      }}
                    >
                      <IoCloudSharp />{" "}
                    </span>
                    <h3> {item["weather"].map((item) => item.description)}</h3>
                  </div>
                </div>

                <hr style={{ width: "100%" }} />
                <br />
                <div className="weather-city">
                  <h3 style={{ fontSize: "1.71rem", fontWeight: "400" }}>
                    {dayFormatter.format(date)},{" "}
                    <span id="gray">
                      {formatter.format(date)}
                      <br />
                    </span>
                  </h3>
                  <div
                    style={{ display: "flex" }}
                    className="weather-city-country"
                  >
                    <span style={{ fontSize: "1.5rem" }}>
                      <IoLocationSharp />
                    </span>
                    <h3 style={{ fontWeight: "400" }}>
                      {item["name"]}, {item["sys"].country}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>

      <div style={{ overflow: "hidden" }} className="page-right">
        <div className="page-content">
          <div className="today">
            <h1>Hoje</h1>

            {weather2 && weather2.map((item) => <Today item={item} />)}
          </div>

          <br />
          <div className="highlights">
            <h1>Destaques</h1>
            <div className="highlights-item">
              {weather2 && weather2.map((item) => <Highlights item={[item]} />)}
            </div>
          </div>

          <br />
          <div className="week">
            <h1>Essa Semana</h1>
            <div className="week-item">
              {weather2 && weather2.map((item) => <Forecast item={item} />)}
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;
