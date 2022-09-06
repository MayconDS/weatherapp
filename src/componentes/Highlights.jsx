import React from "react";
import { Card, Card2 } from "./Card";

import "../styles/highlights.sass";

const Highlights = ({ item }) => {
  let dt = item.map((item) => item["current"].dt);
  let sunr = item.map((item) => item["current"].sunrise);
  let suns = item.map((item) => item["current"].sunset);

  const sunrise = new Date(sunr * 1000);
  const sunset = new Date(suns * 1000);

  const date = new Date(dt[0] * 1000);
  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: item.timezone,
  });
  const dayFormatter = Intl.DateTimeFormat([], {
    weekday: "long",
    timeZone: item.timezone,
  });

  return (
    <>
      {item.map((item) => (
        <div
          className="highlights"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr ",
          }}
        >
          <Card
            fullWidth={true}
            icon="https://hweather.netlify.app/weather_icons/humidity.png"
            day={"humidty"}
            graus={item["current"].humidity + "%"}
          />
          <Card
            fullWidth={true}
            icon="https://hweather.netlify.app/weather_icons/wind-night.png"
            day={"Wind Speed"}
            graus={item["current"].wind_speed + " m/s"}
          />
          <Card2
            fullWidth={true}
            hoursSr={formatter.format(sunrise)}
            hoursSs={formatter.format(sunset)}
            icon="https://hweather.netlify.app/weather_icons/sunrise.png"
            icon2="https://hweather.netlify.app/weather_icons/sunset.png"
            day={"humidty"}
            graus={item["current"].humidity + "%"}
          />
          <Card
            fullWidth={true}
            icon="https://hweather.netlify.app/weather_icons/clouds.png"
            day={"Clouds"}
            graus={item["current"].clouds + "%"}
          />
          <Card
            fullWidth={true}
            hoursSr={formatter.format(sunrise)}
            hoursSs={formatter.format(sunset)}
            day={"UV Index"}
            icon="https://hweather.netlify.app/weather_icons/uv.png"
            graus={item["current"].uvi}
          />
          <Card
            fullWidth={true}
            day={"Pressure"}
            icon="https://hweather.netlify.app/weather_icons/pressure.png"
            graus={item["current"].pressure + " hpa"}
          />
        </div>
      ))}
    </>
  );
};

export default Highlights;
