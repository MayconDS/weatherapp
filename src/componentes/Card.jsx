import React from "react";

import "../styles/card.sass";

const Card = ({ icon, day, graus, hours, desc }) => {
  return (
    <div className="card">
      <h3>
        {day} <span>{hours}</span>
      </h3>
      <img src={icon} alt="" />
      <span>{desc}</span>
      <h3>{graus}</h3>
    </div>
  );
};
const Card2 = ({ icon, icon2, hoursSr, hoursSs }) => {
  return (
    <div className="card2">
      <div className="icon">
        <div className="icon-sunrise">
          <img src={icon} alt="" />
        </div>
        <div className="icon-sunset">
          <img src={icon2} alt="" />
        </div>
      </div>
      <div className="label">
        <div className="label-sunrise">
          <h3>{hoursSr}</h3>
          <span>Sunrise</span>
        </div>
        <div className="label-sunset">
          <h3>{hoursSs}</h3>
          <span>Sunset</span>
        </div>
      </div>

      <br />
    </div>
  );
};

const Card3 = ({ day, icon, desc, maxTemp, minTemp, hours }) => {
  return (
    <div className="card3">
      <div className="day">
        <h3>
          {day} <span>{hours}</span>
        </h3>
      </div>
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="desc">
        <span>{desc}</span>
      </div>

      <div className="temp">
        <h2>{maxTemp}</h2>
        <h2 style={{ color: "gray" }}>{minTemp}</h2>
      </div>
    </div>
  );
};
export { Card, Card2, Card3 };
