import React, { useEffect, useRef, useState } from "react";
import { BsChatSquareFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import ChatBotButton from "./Button";
import InitialScreen from "./InitialScreen";

const ChatBotComponent = () => {
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
      <div className={`chat_bot_div ${toggle ? "toggle" : ""}`}>
        <div
          onClick={() => setToggle(false)}
          className="close_btn_div flex align_center justify_center pointer"
        >
          <FaChevronDown />
        </div>
        <InitialScreen />
      </div>
      <ChatBotButton setToggle={setToggle} toggle={toggle} />
    </div>
  );
};

export default ChatBotComponent;
