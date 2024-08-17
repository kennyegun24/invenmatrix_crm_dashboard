import React from "react";
import "./style.css";
import { BsChatSquareFill } from "react-icons/bs";

const ChatBotButton = ({ setToggle, toggle }) => {
  return (
    <button
      className={`chat_bot_button ${toggle ? "hide_bot" : ""}`}
      onClick={() => setToggle((prev) => !prev)}
    >
      <BsChatSquareFill size={20} className={toggle ? "hide_bot" : ""} />
    </button>
  );
};

export default ChatBotButton;
