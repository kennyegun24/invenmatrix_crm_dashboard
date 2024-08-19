import React from "react";
import "./chat.css";
import ChatBotHeader from "./ChatBotHeader";

const Chats = () => {
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
      <input type="text" placeholder="Type message here..." />
    </div>
  );
};

export default Chats;
