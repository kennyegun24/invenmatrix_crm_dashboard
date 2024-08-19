import React, { useState } from "react";
import "./chat.css";
import ChatBotHeader from "./ChatBotHeader";
import { FaPaperPlane } from "react-icons/fa6";

const Chats = () => {
  const [userText, setUserText] = useState("");
  return (
    <div className="chat-bot-chat flex column justify_between">
      <ChatBotHeader />
      <div className="flex column gap1rem chat-texts-container">
        <div className="chat_text_div flex chat_reverse">
          <p className="chat-text">
            This is a message hjg g hjg hjg fhgvjftf kyytsresh
          </p>
        </div>
        <div className="chat_text_div flex chat_reverse">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div flex">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div flex chat_reverse">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div flex">
          <p className="chat-text">
            This is a message hjg g hjg hjg fhgvjftf kyytsresh
          </p>
        </div>
        <div className="chat_text_div flex">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div flex chat_reverse">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div flex">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div flex chat_reverse">
          <p className="chat-text">
            This is a message hjg g hjg hjg fhgvjftf kyytsresh
          </p>
        </div>
        <div className="chat_text_div flex">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div chat_reverse flex">
          <p className="chat-text">This is a message</p>
        </div>
        <div className="chat_text_div chat_reverse flex">
          <p className="chat-text">This is a message</p>
        </div>
      </div>

      <div className="flex gap05rem width100 chat_bot_input_div pointer">
        <input
          type="text"
          className="border_all"
          placeholder="Type message here..."
        />

        <div className="chat_bot_send_btn flex justify_end align_center">
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
};

export default Chats;
