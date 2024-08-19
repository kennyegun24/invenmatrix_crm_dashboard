"use client";

import ChatBotComponent from "@/components/chat/ChatBotComponent";

import { createContext } from "react";

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
