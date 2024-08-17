"use client";

import ChatBotComponent from "@/components/chat/ChatBotComponent";

const { createContext } = require("react");

export const ChatbotContext = createContext();

const ChatbotProvider = ({ children }) => {
  return (
    <ChatbotContext.Provider>
      <ChatBotComponent />
      {children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotProvider;
