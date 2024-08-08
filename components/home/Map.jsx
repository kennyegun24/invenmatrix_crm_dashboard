"use client";
import React, { useContext } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import json from "@/features.json";
import { ThemeContext } from "@/contexts/DarkMode";
import { RxDotFilled } from "react-icons/rx";

const Map = () => {
  const { mode } = useContext(ThemeContext);

  const isHighlighted = (geo) => {
    const continent = geo.properties.CONTINENT;
    return ["Africa", "Asia"].includes(continent);
  };

  return (
    <div
      className={`map_container flex column gap1rem ${
        mode === "dark" ? "map_dark" : ""
      }`}
    >
      <h3>Sales By Region</h3>
      <ComposableMap>
        <Geographies geography={json}>
          {({ geographies }) =>
            geographies.map((geo) => {
              console.log(geo);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isHighlighted(geo) ? "#22ad01" : "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: isHighlighted(geo) ? "#22ad01" : "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: isHighlighted(geo) ? "#22ad01" : "#E42",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <select name="" id="">
        <option value="">Monthly</option>
      </select>
      <section className="country_sales">
        <div className="flex justify_between country_sale">
          <h4>
            <RxDotFilled /> Total Sales
          </h4>
          <p>$42,000,000</p>
        </div>
        <hr />
        <div className="flex justify_between country_sale">
          <h4>
            <RxDotFilled /> Total Sales
          </h4>
          <p>$42,000,000</p>
        </div>
        <hr />
        <div className="flex justify_between country_sale">
          <h4>
            <RxDotFilled /> Total Sales
          </h4>
          <p>$42,000,000</p>
        </div>
      </section>
    </div>
  );
};

export default Map;
