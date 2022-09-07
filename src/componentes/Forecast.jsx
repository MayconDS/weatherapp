import React from "react";
import { Card3 } from "./Card";
import "../styles/forecast.sass";

const Forecast = ({ item }) => {
  const dayFormatter = Intl.DateTimeFormat([], {
    weekday: "long",
    timeZone: item.daily.timezone,
  });

  return (
    <>
      <div className="forecast">
        {item.daily.map((item) => (
          <Card3
            day={dayFormatter.format(item.dt * 1000)}
            icon={
              item["weather"].map((item) => item.description) == "chuva leve"
                ? "https://hweather.netlify.app/weather_icons/10d.png"
                : item["weather"].map((item) => item.description) ==
                  "nuvens nubladas"
                ? "https://hweather.netlify.app/weather_icons/04n.png"
                : item["weather"].map((item) => item.description) == "nublado"
                ? "https://hweather.netlify.app/weather_icons/04d.png"
                : item["weather"].map((item) => item.description) ==
                  "chuva moderada"
                ? "https://hweather.netlify.app/weather_icons/10d.png"
                : item["weather"].map((item) => item.description) ==
                  "algumas nuvens"
                ? "https://hweather.netlify.app/weather_icons/02d.png"
                : item["weather"].map((item) => item.description) == "céu limpo"
                ? "https://hweather.netlify.app/weather_icons/01d.png"
                : item["weather"].map((item) => item.description) ==
                  "nuvens dispersas"
                ? "https://hweather.netlify.app/weather_icons/03d.png "
                : item["weather"].map((item) => item.description) == "nublado"
                ? "https://hweather.netlify.app/weather_icons/50d.png"
                : item["weather"].map((item) => item.description) ==
                  "chuva forte"
                ? "https://hweather.netlify.app/weather_icons/10n.png"
                : ""
            }
            maxTemp={item["temp"].max.toFixed(0) + "°"}
            minTemp={item["temp"].min.toFixed(0) + "°"}
            desc={item["weather"].map((item) => item.description)}
          />
        ))}
      </div>
    </>
  );
};

export default Forecast;
