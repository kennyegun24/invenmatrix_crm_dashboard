import React from "react";
import "./style.css";
import { BsChatSquareFill } from "react-icons/bs";

const ChatBotButton = ({ setToggle, toggle }) => {
  return (
    <button
      className={`chat_bot_button ${toggle ? "hide_bot" : "show_bot_icon"}`}
      onClick={() => setToggle((prev) => !prev)}
    >
      <BsChatSquareFill
        // className={toggle ? "hide_bot" : "show_bot_icon"}
        size={20}
      />
    </button>
  );
};

export default ChatBotButton;
