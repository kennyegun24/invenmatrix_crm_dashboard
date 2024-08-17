import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { BsChatSquareFill } from "react-icons/bs";

const ChatBotButton = () => {
  const [toggle, setToggle] = useState(false);
  const chatContainerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      chatContainerRef.current &&
      !chatContainerRef.current.contains(e.target)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={chatContainerRef} className="chat_bot_container">
      <div
        className={`chat_bot_div ${
          toggle ? "toggle" : ""
        } flex align_center gap05rem`}
      >
        {/* Chatbot content goes here */}
      </div>
      <button
        className={`chat_bot_button ${toggle ? "hide_bot" : "show_bot_icon"}`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <BsChatSquareFill
          className={toggle ? "hide_bot" : "show_bot_icon"}
          size={20}
        />
      </button>
    </div>
  );
};

export default ChatBotButton;
