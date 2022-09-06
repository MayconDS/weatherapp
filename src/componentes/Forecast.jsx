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
              item["weather"].map((item) => item.description) == "light rain"
                ? "https://hweather.netlify.app/weather_icons/10d.png"
                : item["weather"].map((item) => item.description) ==
                  "overcast clouds"
                ? "https://hweather.netlify.app/weather_icons/04d.png"
                : item["weather"].map((item) => item.description) ==
                  "broken clouds"
                ? "https://hweather.netlify.app/weather_icons/04d.png"
                : item["weather"].map((item) => item.description) ==
                  "moderate rain"
                ? "https://hweather.netlify.app/weather_icons/10d.png"
                : item["weather"].map((item) => item.description) ==
                  "few clouds"
                ? "https://hweather.netlify.app/weather_icons/02d.png"
                : item["weather"].map((item) => item.description) == "clear sky"
                ? "https://hweather.netlify.app/weather_icons/01d.png"
                : item["weather"].map((item) => item.description) ==
                  "scattered clouds"
                ? "https://hweather.netlify.app/weather_icons/03d.png "
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
