import React from "react";
import "./style.css";

const GridLoader = () => {
  const fakeArray = Array.from({ length: 5 });
  return (
    <div className="column flex gap2rem">
      <div className="card">
        {fakeArray.map((arr, _) => (
          <div key={_} className="flex column gap1rem loading_item">
            <div className="card__image loading"></div>
            <div className="card__title loading"></div>
            <div className="card__description loading"></div>
          </div>
        ))}
      </div>

      <div className="card__description loading"></div>
      <div>
        <div className="card">
          {fakeArray.map((arr, _) => (
            <div key={_} className="flex column gap1rem loading_item">
              <div className="card__image loading"></div>
              <div className="card__title loading"></div>
              <div className="card__description loading"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridLoader;
