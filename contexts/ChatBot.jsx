"use client";

import ChatBotButton from "@/components/chat/Button";

const { createContext } = require("react");

export const ChatbotContext = createContext();

const ChatbotProvider = ({ children }) => {
  return (
    <ChatbotContext.Provider>
      <ChatBotButton />
      {children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotProvider;
