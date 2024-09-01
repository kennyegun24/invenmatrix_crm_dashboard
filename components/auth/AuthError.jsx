import React from "react";
import { LuAlertTriangle } from "react-icons/lu";
const AuthError = ({ errMessage }) => {
  console.log(errMessage);
  if (!errMessage) {
    return null;
  }
  if (errMessage?.name?.toLowerCase() === "zoderror") {
    return (
      <div className="auth_error_container flex gap1rem">
        {/* <div className="flex gap05rem align_center"> */}
        <LuAlertTriangle />
        {/* </div> */}
        <div className="flex column gap05rem">
          <p style={{ fontWeight: 700, color: "#fff" }}>Wrong input types</p>
          {errMessage.issues.map((m, _) => (
            <p key={_}>{m.message}</p>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="auth_error_container flex gap05rem align_center">
      <LuAlertTriangle />
      <p style={{ fontWeight: 700, color: "#fff" }}>{errMessage.message}</p>
    </div>
  );
};

export default AuthError;
