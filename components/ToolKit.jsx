import React from "react";

const CustomToolkit = ({ payload, active, label }) => {
  if (payload && label && active) {
    return (
      <div>
        {payload?.map((item) => (
          <div
            style={{
              background: "#000",
              padding: ".5rem 1rem",
              borderRadius: 12,
              fontSize: "14px",
            }}
            className="flex column gap05rem"
            key={item?.payload.uv * Math.floor(Math.random())}
          >
            <p style={{ color: "#fff" }}>{label}</p>
            <div>
              <p style={{ color: "#fff" }}>Value: {item?.value}</p>
              <p style={{ color: "#fff" }}>Item name: {item?.payload?.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
export default CustomToolkit;
