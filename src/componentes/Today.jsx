import React from "react";
import { Card3 } from "./Card";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/today.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Today = ({ item }) => {
  const dt = item.hourly.map((item) => item.dt);
  const date = new Date(dt[0] * 1000);

  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: item.daily.timezone,
  });
  const dayFormatter = Intl.DateTimeFormat([], {
    weekday: "long",
    timeZone: item.daily.timezone,
  });

  return (
    <>
      <Swiper
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <div>
          {item.hourly.map((item) => (
            <SwiperSlide style={{ flexShrink: "1" }}>
              <Card3
                icon={
                  item["weather"].map((item) => item.description) ==
                  "light rain"
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
                    : item["weather"].map((item) => item.description) ==
                      "clear sky"
                    ? "https://hweather.netlify.app/weather_icons/01d.png"
                    : item["weather"].map((item) => item.description) ==
                      "scattered clouds"
                    ? "https://hweather.netlify.app/weather_icons/03d.png "
                    : ""
                }
                day={dayFormatter.format(item.dt * 1000)}
                graus={item.temp.toFixed(1) + "°"}
                hours={formatter.format(item.dt * 1000)}
                desc={item["weather"].map((item) => item.description)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
export default Today;
