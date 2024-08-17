import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ChatBotButton from "./Button";
import InitialScreen from "./InitialScreen";

const ChatBotComponent = () => {
  const [toggle, setToggle] = useState(false);
  const chatContainerRef = useRef(null);
  const [showOverflow, setShowOverflow] = useState(false);

  useEffect(() => {
    if (toggle) {
      const timer = setTimeout(() => {
        setShowOverflow(true);
      }, 200);
      return () => clearTimeout(timer); // Clean up the timer on unmount or toggle change
    } else {
      setShowOverflow(false);
    }
  }, [toggle]);
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
        className={`chat_bot_div ${toggle ? "toggle" : ""} ${
          showOverflow ? "show_over_flow" : ""
        }`}
      >
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
