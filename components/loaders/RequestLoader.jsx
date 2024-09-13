import React from "react";

const RequestLoader = () => {
  return (
    <div className="absolute request_spinner_container flex align_center justify_center">
      <div className="request_spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default RequestLoader;
