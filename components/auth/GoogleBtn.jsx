import React from "react";
import { FcGoogle } from "react-icons/fc";

export const AuthButton = ({ text }) => {
  return <button className="login_btn">{text}</button>;
};

const GoogleBtn = ({ text }) => {
  return (
    <button className="login_with_google flex align_center justify_center gap1rem">
      <FcGoogle size={20} />
      {text}
    </button>
  );
};

export default GoogleBtn;
