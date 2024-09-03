import React from "react";
import { FaCheck } from "react-icons/fa6";
const AuthSuccess = ({ successMessage }) => {
  if (!successMessage) {
    return null;
  }
  return (
    <div className="auth_success_container flex gap05rem align_center">
      <FaCheck color="#fff" />
      <p style={{ fontWeight: 700, color: "#fff" }}>{successMessage}</p>
    </div>
  );
};

export default AuthSuccess;
