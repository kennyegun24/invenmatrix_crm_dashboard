import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import ChatBotHeader from "./ChatBotHeader";
import { FaPaperPlane } from "react-icons/fa6";
import BotTextAnimation from "./BotTextAnimation";

const Chats = () => {
  const [messages, setMessages] = useState([]);
  const [userText, setUserText] = useState("");
  const [generatingText, setGeneratingText] = useState(false);
  const smoothSlide = useRef();
  const handleSend = async () => {
    if (userText.trim !== "") {
      setMessages((prev) => [
        ...prev,
        {
          message: userText,
          id: "user",
        },
      ]);
      setGeneratingText(true);
      const fetchData = await fetch("/api/bot", {
        method: "POST",
        body: JSON.stringify({
          message: userText,
        }),
      });
      const data = await fetchData.json();
      if (data) {
        setTimeout(() => {
          setGeneratingText(false);
          setMessages((prev) => [
            ...prev,
            {
              message: data.message,
              id: data.id,
            },
          ]);
          setUserText("");
        }, 300);
      }
    }
  };
  useEffect(() => {
    smoothSlide.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-bot-chat flex column justify_between">
      <ChatBotHeader />
      <div className="flex column gap1rem chat-texts-container">
        {messages.map((m, _) => (
          <div
            ref={smoothSlide}
            key={_}
            className={`chat_text_div flex ${
              m.id === "user" && "chat_reverse"
            }`}
          >
            <p className="chat-text">{m.message}</p>
          </div>
        ))}
        {generatingText && (
          <div
            className={`chat_text_div flex chat-text justify_center`}
            style={{ width: 70, padding: "0.5rem 0.25rem" }}
          >
            <BotTextAnimation />
          </div>
        )}
      </div>

      <div className="flex gap05rem width100 chat_bot_input_div pointer">
        <input
          onChange={(e) => setUserText(e.target.value)}
          type="text"
          className="border_all"
          placeholder="Type message here..."
          value={userText}
        />

        <div
          className="chat_bot_send_btn flex justify_end align_center"
          onClick={handleSend}
        >
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
};

export default Chats;
